const addBot = process.env.ADD_BOT;

function multipleLinks(destination, ...sources){
  const results = [];
  for(const source of sources){
    results.push({
      source,
      destination,
      permanent: true
    });
  }

  return results;
}

module.exports = {
    async redirects() {
      return [
        ...multipleLinks(addBot, '/bot', '/add', '/invite'),
        ...multipleLinks("/legal/privacy", '/tos', '/legal', '/privacy'),
        ...multipleLinks("https://discord.gg/CfVFe46cD4", '/discord', '/support', '/server', '/join'),
        ...multipleLinks("https://github.com/turtlepaws-workshop/horizon", '/github', '/sourcecode', '/source-code', '/open-source'),
        ...multipleLinks("https://github.com/Turtlepaw/horizon-dashboard", '/dashboard-git', '/dashboard-gitub', '/dash-github', '/dash-git'),
        ...multipleLinks("/guilds", '/dashboard', '/manage', '/bot', '/server'),
        ...multipleLinks("https://docs.trtle.xyz/", "/docs", "/documentation"),
        ...multipleLinks("https://my.forms.app/turtlepaw/beta", "/beta", "/closed_beta")
      ]
    },
  }