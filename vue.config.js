const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './', // 👈 Add this line
  transpileDependencies: true
})
