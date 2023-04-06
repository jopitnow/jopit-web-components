const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: "jopit",
        projectName: "web-components",
        webpackConfigEnv,
        argv,
    });

    return merge(defaultConfig, {
        devServer: {
            port: 1234
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    type: "asset"
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'assets/fonts'
                            }
                        }
                    ]
                }
            ]
        }
    });
};
