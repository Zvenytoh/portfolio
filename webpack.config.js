const Encore = require("@symfony/webpack-encore");
const path = require("path");

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore
  // directory where compiled assets will be stored
  .setOutputPath("public/build/")
  // public path used by the web server to access the output path
  .setPublicPath("/build")
  // only needed for CDN's or subdirectory deploy
  //.setManifestKeyPrefix('build/')

  // Enable PostCSS Loader (needed for Tailwind CSS)
  .enablePostCssLoader()

  // Add your entry point
  .addEntry("app", "./assets/app.js")

  // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
  .splitEntryChunks()

  // Will require an extra script tag for runtime.js
  .enableSingleRuntimeChunk()

  // Clean the output folder before building
  .cleanupOutputBeforeBuild()

  // Enable build notifications
  .enableBuildNotifications()

  // Enable source maps (if not in production)
  .enableSourceMaps(!Encore.isProduction())

  // Enable hashed filenames for cache busting (in production)
  .enableVersioning(Encore.isProduction())

  // Configure Babel for JS transpiling
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = "usage";
    config.corejs = "3.38";
  })

  // Enable Sass/SCSS support if needed
  .enableSassLoader()

  // Enable React support if needed
  .enableReactPreset();
  
Encore.enableVersioning(Encore.isProduction());

// Export the Webpack configuration
module.exports = Encore.getWebpackConfig();
