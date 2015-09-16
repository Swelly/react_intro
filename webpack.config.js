module.exports = {
    // Entry point + files to be loaded
    entry: getEntrySources(['./src/js/entry.js']),
    // What to build and where
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'build/bundle.js'
    },
    // http://webpack.github.io/docs/configuration.html#devtool
    devtool: 'eval-source-map',
    module: {
        // Used on code before transformed
        preLoaders: [
            {
                // "test" is commonly used to match the file extension
                test: /\.jsx?$/,
                // "exclude" should to used to exclude exceptions
                exclude: /(node_modules|bower_components)/,
                loader: 'source-map'
            }
        ],
        // Loaders http://webpack.github.io/docs/loaders.html
        loaders: [
            // Styles
            {
                // Find SCSS within src/
                test: /\.scss$/,
                include: /src/,
                loaders: [
                    'style',
                    'css',
                    'autoprefixer?browsers=last 3 versions',
                    'sass?outputStyle=expanded'
                ]
            },
            // Images
            {
                // Find all images & optimize
                test: /\.(jpe?g|png|gif|svg)$/i,
                // Base 64 encoded | > URL
                loaders: [
                    'url?limit=8192',
                    'img'
                ]
            },
            // Javascript
            {
                // Find all JS
                test: /\.jsx?$/,
                // Ignore vendor
                exclude: /(node_modules|bower_components)/,
                // Transpile with Babel
                loaders: [
                    'react-hot',
                    'babel?stage=0'
                ]
            }
        ]
    }
};

// ENV handler | Default = Development
// This function enables the webpack development server (DVS)
// and the hot swap loader to be considered entry-points to the script.
// If the environment variable NODE_ENV isn’t set to production, then add these sources.

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }
    return sources;
}
