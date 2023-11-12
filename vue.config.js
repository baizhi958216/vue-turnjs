const webpack = require('webpack');
module.exports = {
    lintOnSave: false,
    //配置webpack选项的内容
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
            })
        ]
    },
 
}