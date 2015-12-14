# 2.5.3, 3.0.2 (2015-12-13)

  * Fix "show all" link where it was not using the configured base (if used)
  
# 2.5.2, 3.0.1 (2015-12-13)

  * Fix syntax highlighting when individual components in the sidebar is selected
  * Adjust component category spacing
  * Add show all link on sidebar

# 2.5.1 (2015-12-13)

  * Show components in each category in the sidebar

# 2.4.0 (2015-12-11)

  * Base exclusion `babel-loader` rule is no longer `path.resolve(process.cwd(), 'node_modules')`, but instead `node_modules`. This is mainly for projects that need to compile guides against directories that contain individually packaged components that have their own `node_modules` directory.

# 2.3.0 (2015-12-08)

  Performance enhancements:
  
  * separate vendor components into another bundle
  * Cache highlighted nodes so they are not re-processed. For really large pages, the highlighter can take a LOT of time for processing before the page is re-rendered. This fix hopefully resolves most of that.
  * `highlight.js` updated to `9.x`

# 2.2.0 (2015-12-01)

  * Add `webpackConfig` configuration file option to extend the rsg webpack configuration

# 2.1.1 (2015-12-01)

  * Fix issue where the props metadata file was not being written out if no propdocs were defined

# 2.1.0 (2015-11-30)

  * add `transpileIncludes` option to the config to allow for additional rules for babel transpiling

# 2.0.5 (2015-11-24)

  * Fix major bug as a result of renaming the package from fork

# 2.0.0 (2015-11-24)

  * First alt version, forked from `react-styleguide-generator`
  * Removed `browserify` and replaced with `webpack` + hot module replacement
  * Complete overhaul of the core `rsg.js` lib to support `webpack`
  * `react-docgen` generation and asset distribution moved to custom webpack plugins
  * Fixed a bug where using input text boxes and typing into them will shift focus to the search box

