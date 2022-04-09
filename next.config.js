const addBot = "https://discord.com/oauth2/authorize?client_id=956747231615152188&permissions=1521157008391&scope=bot%20applications.commands";
module.exports = {
    async redirects() {
      return [
        {
          source: '/discord',
          destination: 'https://discord.gg/CfVFe46cD4',
          permanent: true,
        },
        {
          source: '/bot',
          destination: addBot,
          permanent: true,
        },
        {
          source: '/invite',
          destination: addBot,
          permanent: true,
        },
        {
          source: '/add',
          destination: addBot,
          permanent: true,
        },
      ]
    },
  }