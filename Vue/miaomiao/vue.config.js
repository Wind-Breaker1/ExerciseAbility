module.exports = {
    
    // 配置反向代理
    publicPath: '/miaomiao',
    devServer: {
        proxy: {
            // 代理：只要是/?app开头的请求就将target拼接到请求前边
            "/api2": {
                target: "http://localhost:3000",
                changeOrigin: true,
            },
            "/my": {
                target: "https://i.maoyan.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/my': ''
                }
            }

            // '/my': {
            //     target: "http://api.k780.com",
            //     changeOrigin: true,
            //     // 路径重写，将/my替换成空字符串
            //     pathRewrite: {
            //         '^/my': ''
            //     }
            // }
        }
    }
}