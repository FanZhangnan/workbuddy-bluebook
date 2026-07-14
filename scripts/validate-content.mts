import { access, readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { curriculum } from '../docs/.vitepress/curriculum.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const errors: string[] = []
const requiredFields = ['title','description','part','chapter','difficulty','estimatedTime','workbuddyVersion','lastVerified','status','capabilities','deliverables']
const requiredSections = ['你将拿到什么','什么时候用','常见失败','练一练','作品集节点','版本说明']
const partOneSections = ['三步搞定']
const partTwoSections = ['跟着做','验收清单']

function fileForRoute(route: string) { return resolve(root, `docs${route}.md`) }
function frontmatter(source: string) {
  const match = source.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return new Set<string>()
  return new Set(match[1].split('\n').filter((line) => /^[A-Za-z][\w-]*:/.test(line)).map((line) => line.split(':')[0]))
}

if (curriculum.length !== 19) errors.push(`curriculum must contain 19 chapters; found ${curriculum.length}`)
const numbers = curriculum.map((chapter) => chapter.number)
const routes = curriculum.map((chapter) => chapter.route)
if (new Set(numbers).size !== numbers.length) errors.push('curriculum chapter numbers are not unique')
if (new Set(routes).size !== routes.length) errors.push('curriculum routes are not unique')
for (let number = 1; number <= 19; number++) if (!numbers.includes(number)) errors.push(`curriculum is missing chapter ${number}`)

for (const chapter of curriculum.filter((item) => item.published)) {
  const file = fileForRoute(chapter.route)
  try {
    const source = await readFile(file, 'utf8')
    const fields = frontmatter(source)
    for (const field of requiredFields) if (!fields.has(field)) errors.push(`${file}: missing frontmatter field ${field}`)
    if (!source.includes(`chapter: ${chapter.number}`)) errors.push(`${file}: frontmatter chapter does not match manifest`)
    for (const section of requiredSections) if (!source.includes(section)) errors.push(`${file}: missing required chapter content “${section}”`)
    if (chapter.part === 1 && !partOneSections.some((s) => source.includes(s))) errors.push(`${file}: Part 1 chapter must include “三步搞定” section`)
    if (chapter.part === 2 && !partTwoSections.every((s) => source.includes(s))) errors.push(`${file}: Part 2 chapter must include “跟着做” and “验收清单” sections`)
    if (source.length < 1200) errors.push(`${file}: chapter body is too short for MVP depth (${source.length} characters)`)
  } catch { errors.push(`${file}: published chapter file does not exist`) }
}

const manifestPath = resolve(root, 'docs/public/downloads/manifest.json')
const manifest = JSON.parse(await readFile(manifestPath, 'utf8')) as { items: Array<{ id: string; file: string }> }
if (manifest.items.length < 6) errors.push('download manifest must include at least six files')
if (new Set(manifest.items.map((item) => item.id)).size !== manifest.items.length) errors.push('download IDs are not unique')
for (const item of manifest.items) {
  try { await access(resolve(root, 'docs/public/downloads', item.file)) } catch { errors.push(`download ${item.id} is missing file ${item.file}`) }
}

if (errors.length) {
  console.error(`Content validation failed with ${errors.length} error(s):\n- ${errors.join('\n- ')}`)
  process.exit(1)
}
console.log(`Content validation passed: ${curriculum.length} manifest chapters, ${curriculum.filter((item) => item.published).length} published chapters, ${manifest.items.length} downloads.`)
