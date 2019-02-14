import MarkdownIt from 'markdown-it'
import highlight from './highlight'

export default source => {
  const md = new MarkdownIt({
    highlight
  })

  return source ? md.render(source) : "<h4>I'm not here</h4>"
}
