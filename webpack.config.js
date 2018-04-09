const path = require('path');

module.exports = {
    entry: "./www/app/main",  
    output: {
        path: path.resolve(__dirname, "./www/dist"), 
        filename: "bundle.js",
        publicPath: "/xuni/"     //这是对webpack-dev-server的配置
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                include: [
                    path.resolve(__dirname, "www/app")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "vue-loader",
                options: {
                    loaders: {
                        less: 'vue-style-loader!css-loader!less-loader'
                    }
                }
            }
        ]
    },
    mode: 'development',
    devServer : {
        proxy: {
            //下面的参数从vue-cli上扒拉出来的
            "/api": {
                target: 'http://127.0.0.1:3000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'    
                }
            }
        },
        contentBase: path.resolve(__dirname, "./www"), 
        port : 8080
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    }
}