import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3005; // app port
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, { //usinig webpack  webpack-dev-middleware
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler)); //usinig webpack  webpack-hot-middleware

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html')); // return  '../src/index.html'
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);   //adress of app
  }
});
