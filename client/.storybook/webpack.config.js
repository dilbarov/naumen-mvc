const path = require("path");

module.exports = ({ config }) => {
    config.module.rules = [];
    config.module.rules.push(
        {
            test: /\.(le|c)ss$/,
            use: [
                "classnames-loader",
                'style-loader',
                { loader: 'css-loader', options: { modules: true  } },
                {
                    loader: "less-loader",  // compiles Less to CSS
                }
            ],
            include: [path.join(__dirname, "..", "src"), path.join(__dirname, "..", "stories")],
        },
        {
            test: /\.(ts|js)x?$/,
            use: ['babel-loader'],
            include: [path.join(__dirname, "..", "src"), path.join(__dirname, "..", "stories")],
        },
        {
            test: /\.(img|svg|png|jpe?g|gif|woff|woff2|eot)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
    );
    config.resolve.extensions = ['.js', '.jsx', '.json', '.ts', '.tsx'];
    return config;
};
