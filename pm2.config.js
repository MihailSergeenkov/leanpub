module.exports = {
  apps: [{
    name: 'leanpub',
    script: './dist/server/server.js',
    env: {
      NODE_ENV: 'production'
    }
  }],
  deploy: {
    production: {
      user: 'user',
      host: ['192.168.1.55'],
      ref: 'origin/feature/lesson-14-dop',
      repo: 'git@github.com:MihailSergeenkov/leanpub.git',
      path: '/home/user/leanpub',
      'post-deploy': 'npm install; npm run build:client; npm run build:server; pm2 startOrRestart pm2.config.js'
    }
  }
}
