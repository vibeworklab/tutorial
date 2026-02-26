import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const docsDir = path.join(__dirname, '..', 'docs')

const vueCodeBlockRegex = /```vue\n([\s\S]*?)```/g

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')
  let modified = false

  content = content.replace(vueCodeBlockRegex, (match, code) => {
    if (code.includes('{{') && code.includes('}}')) {
      modified = true
      return `\`\`\`html\n${code}\`\`\``
    }
    return match
  })

  if (modified) {
    fs.writeFileSync(filePath, content)
    console.log(`Processed: ${filePath}`)
  }
}

function renameReadmeToIndex(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      renameReadmeToIndex(filePath)
    } else if (file.toLowerCase() === 'readme.md') {
      const newPath = path.join(dir, 'index.md')
      if (!fs.existsSync(newPath)) {
        fs.renameSync(filePath, newPath)
        console.log(`Renamed: ${filePath} -> ${newPath}`)
      }
    }
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      walkDir(filePath)
    } else if (file.endsWith('.md')) {
      processFile(filePath)
    }
  }
}

renameReadmeToIndex(docsDir)
walkDir(docsDir)
console.log('Done!')
