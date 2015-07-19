/**
 * This mixin allows examples to expose propType documentation that is generated a base component
 * along with the style guide metadata
 * @param {React.Element} baseComponent
 */
module.exports = function(baseComponent) {
  return {
    getDefaultProps: function () {

      // Copies the styleguide props over from the base component
      // does not work in componentWillMount (statics would get overwritten by the example component)
      this.styleguide = this.styleguide || {}

      if (baseComponent.styleguide) {
        Object.keys(baseComponent.styleguide).forEach(function(styleProp) {
          this.styleguide[styleProp] = this.styleguide[styleProp] ? this.styleguide[styleProp] : baseComponent.styleguide[styleProp]
        }, this)
      }

      // https://github.com/FormidableLabs/radium/issues/271
      if (baseComponent.name === 'RadiumEnhancer') {
        this.styleguide.reactDocGenRefId = baseComponent.displayName.replace(/Radium\((.*)\)/, '$1')
      } else {
        this.styleguide.reactDocGenRefId = baseComponent.displayName
      }

      return {}
    }
  }
}
