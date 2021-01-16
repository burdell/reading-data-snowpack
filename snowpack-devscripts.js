module.exports = function (snowpackConfig, pluginOptions) {
  const { replaceToken, scripts } = pluginOptions

  return {
    name: 'snowpack-devscripts',
    async transform({ contents, isDev, fileExt }) {
      if (fileExt !== '.html') return contents

      const scriptTags = isDev
        ? scripts.map(
            (script) => `<script type="module" src="${script}"></script>\n`
          )
        : ''

      if (replaceToken) {
        return contents.replace(`<!-- ${replaceToken} -->`, scriptTags)
      }

      if (!isDev) return contents

      let lineList = contents.split('\n')
      const closingBodyIndex = lineList.findIndex(
        (tag) => tag.trim() === '</body>'
      )

      if (closingBodyIndex >= 0) {
        console.log(closingBodyIndex)
        lineList.splice(closingBodyIndex, 0, ...scriptTags)
      }

      return lineList.join('\n')
    }
  }
}
