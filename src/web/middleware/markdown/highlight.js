import Prism from 'prismjs'

const loadPrismLang = lang => {
  let langObject = Prism.languages[lang]
  if (langObject === undefined) {
    try {
      require('prismjs/components/prism-' + lang)
      return Prism.languages[lang]
    } catch (e) {
      // nothing to do
    }
  } else {
    return langObject
  }
}

const highlight = (text, lang) => {
  const prismLang = loadPrismLang(lang)
  const code = prismLang ? Prism.highlight(text, prismLang) : text
  const classAttribute = lang ? ` class="language-${lang}"` : ''
  return `<pre${classAttribute}><code${classAttribute}>${code}</code></pre>`
}

export default highlight
