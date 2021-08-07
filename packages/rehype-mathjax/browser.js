import {createPlugin} from './lib/create-plugin.js'

const rehypeMathJaxBrowser = createPlugin(
  'rehypeMathJaxBrowser',
  renderBrowser,
  false,
  true
)
export default rehypeMathJaxBrowser

// To do next major: Make `options` match the format of MathJax options
// `{tex: ...}`
function renderBrowser(options) {
  const settings = options || {}
  const display = settings.displayMath || ['\\[', '\\]']
  const inline = settings.inlineMath || ['\\(', '\\)']

  return {render}

  function render(node, renderOptions) {
    const delimiters = renderOptions.display ? display : inline
    node.children.unshift({type: 'text', value: delimiters[0]})
    node.children.push({type: 'text', value: delimiters[1]})
  }
}
