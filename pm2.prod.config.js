module.exports = {
  apps: [
    {
      name: 'FishBarServer',
      script: './dist/main.js',
      env: { // all environment
        NODE_ENV: 'production'
      },
      instances: 'max', // 如果是fork, 不用配置
      exec_mode: 'cluster' // cluster or fork
    }
  ]
}
