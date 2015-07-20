/**
 * This mixin allows examples to:
 *  - expose propType documentation that is generated a base component along with the style guide metadata
 *  - auto-generate example documentation using props (via the baseComponent.displayName)
 * @param {React.Element} baseComponent
 */
module.exports = function (baseComponent) {
  return {
    getDefaultProps: function () {

      // Copies the styleguide props over from the base component
      // does not work in componentWillMount (statics would get overwritten by the example component)
      this.styleguide = this.styleguide || {}

      if (baseComponent.styleguide) {
        Object.keys(baseComponent.styleguide).forEach(function (styleProp) {
          this.styleguide[styleProp] = this.styleguide[styleProp] ? this.styleguide[styleProp] : baseComponent.styleguide[styleProp]
        }, this)
      }

      // for use with additional example generation
      // and react-docgen props doc fetch
      this.styleguide.exampleComponent = baseComponent

      return {}
    }
  }
}
