Chatty App
=====================

Real time chat web application like Slack. Using React, Babel, WebPack and WebSockets.


### Usage

Clone and create your own git repo.

```
git clone git@github.com:lighthouse-labs/react-simple-boilerplate.git
cd react-simple-boilerplate
git remote rm origin
git remote add origin [YOUR NEW REPOSITORY]

```

Install the dependencies and start the server.

```
npm install
npm start
if error then run: npm rebuild node-sass
```

Start Chatty Websocket Server
=====================
```
cd into chatty_server folder
npm install dependancies
npm start
server will run on http://localhost:3000
clients connect by opening http://localhost:3000
```

### Static Files

You can store static files like images, fonts, etc in the `build` folder.

For example, if you copy a file called my_image.png into the build folder you can access it using `http://localhost:3000/build/my_image.png`.

### Linting

This boilerplate project includes React ESLint configuration.

```
npm run lint
```

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* uuid (generate unique id's)
* ws (websocket)






