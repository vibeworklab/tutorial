import type { Plugin } from 'markdown-it'

export function escapeVueInCodePlugin(): Plugin {
  return (md) => {
    const codeInline = md.renderer.rules.code_inline!
    md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
      const content = tokens[idx].content
      if (content.includes('{{') || content.includes('}}')) {
        tokens[idx].content = content
          .replace(/\{\{/g, '&#123;&#123;')
          .replace(/\}\}/g, '&#125;&#125;')
      }
      return codeInline(tokens, idx, options, env, self)
    }
  }
}
