<div align="center">
  <a href="https://github.com/turtlepaws-workshop/horizon">
    <img src="public/ico_rounded.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Horizon Dashboard</h3>

  <p align="center">
    Horizon's Custom Dashboard using Next.js & React.js
    <br />
    <a href="https://horizon.trtle.xyz/"><strong>Explore the demo »</strong></a>
    <br />
    <br />
    <a href="https://horizon.trtle.xyz/">View Demo</a>
    ·
    <a href="https://github.com/turtlepaw/horizon-dashboard/issues">Report Bug</a>
    ·
    <a href="https://github.com/turtlepaw/horizon-dashboard/issues">Request Feature</a>
  </p>
</div>

[Horizon's](https://github.com/turtlepaws-workshop/horizon) dashboard. With Discord auth, many pages, and a beautiful design using [Headless UI](https://headlessui.dev/), [Chakra UI](https://chakra-ui.com), and [Fluent Icons](https://www.npmjs.com/package/@fluentui/react-icons).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Turtlepaw%2Fhorizon-dashboard)

## 📃 Features

- 🧾 MIT License
- 🗝️ Integrable with any bot
- 📝 Built with TS & Next.js
- 📤 Deploy with [Vercel](https://vercel.com/)
- 🫶 100% open-source
- 🏗️ Built in Discord Auth

## ☀️ Horizon

[
   <img src="public/ADD_TO_SERVER.svg" style="width: 300px;">
](https://horizon.trtle.xyz/add)

## 📦 Installation
<details>
  <summary>Expand</summary>
  
   ## Setting up

   1. Ensure you have `git`, `yarn`, `npm` & `node` installed
   2. If you do not already have Vercel CLI, run `yarn global add vercel` (or, if using `npm`, you can run `npm i -g vercel`).
   3. If you are not already logged in, run `vercel login` and finish that process.
   4. Fork this project and clone it with `git clone <github url of fork>`
   5. Finally, run `npm install` or `yarn`

   ## Discord Credentials

   1. First things first, we will need some special keys from Discord. Head to [discord.com/developers](https://discord.com/developers/applications) and hit "New Application" in the top right or click an existing application.
   2. Secondly, open your application and copy the "Client ID", "Bot Token" and "Client Secret" – we will need these later so keep them safe. It is important not to share the Client Secret or your bot token with anybody, too.
   3. Third, during development, you will need to make a file called `.env`. In here we will securely store our sensitive information in a   manner that won't be commited (meaning _pushed_ to Git for all eyes to see).
   4. In this file, you need to add the Client ID and Client Secret. Optionally, you can add the APP URI and JWT Secret but these are not    important for development. You will get a warning in the console, though, if you do not change these values. The reason behind that is    so that you do not forget to change them in production.
      1. The file should look something like this
      ```
      CLIENT_ID=999999999999999999
      CLIENT_SECRET=yDzjb6CEC7mfhCCGQmr8fKtxw_as9CG4
      ```
      2. If you want to rid of the error messages, you can add `JWT_SECRET` (which can be anything in **development** – this does matter in  production, however) & `APP_URI` (which in most occasions should be `http://localhost:3000` unless you know what you are doing).
   5. You will now want to head over to the Discord developer dashboard again, select "OAuth2" in the sidebar, and add `http://  localhost:3000/api/oauth` as a redirect URI.

   ## Production Environment

   1. Next up, head to [vercel.com](https://vercel.com/) and hit "Import Project"
   2. Select "Import Git Repository"
   3. Enter the URL of your fork, and hit continue
      1. We now need to set up your `.env` file, but on the production vercel deployment side.
   4. When it loads, click on "Environment Variables" and one by one, add `CLIENT_ID`, `CLIENT_SECRET`, etc...
   5. It's crucial here that you add `JWT_SECRET` & `APP_URI` as these are the variables that the Discord OAuth will use to sign your jwt    token and handle the Discord redirection
      i. `APP_URI` will look like `https://my-app.vercel.app` (including the protocol)
      ii. `JWT_SECRET` should be a long string of cryptographically generated characters. The more the merrier. [passwordsgenerator.net]  (https://passwordsgenerator.net/) is a great start.
   6. After this, you can hit deploy and watch your app build to production! Congrats.
   7. Finally, open discord developer dashboard and add another redirect URI which is your `APP_URI` with `/api/oauth` added to the end.
</details>

## ❤️ Credits

- [Alii](https://github.com/alii/) created [the Next.js Discord OAuth repository](https://github.com/alii/nextjs-discord-oauth/) which is used here.
- [Turtlepaw (ofc)](https://github.com/turtlepaw) I built most of the dashboard (like 95% of it.)
- [Vercel](https://vercel.com/) for providing **✨ outstanding ✨** hosting.
- [Github](https://github.com) for hosting the source code.

## ✅ ToDo
- [ ] Create a custom component to select a guild setting category
- [x] Render guilds with icons and more to the right in a container
- [ ] Get API running & intergrate API with the dashboard
- [ ] Create an embed page `/embed/create` and `/embeds`
- [x] Create a changelog on the site
- [ ] Create custom markdown formatter ([here](https://npm.im/@horizon/markdown))
- [x] Create a changelog in a markdown file
- [ ] Add tabs to `/guilds/:id`