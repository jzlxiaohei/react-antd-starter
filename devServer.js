var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
    //watchOptions:{
    //    poll:true
    //}
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(function(req,res,next){
    if(req.path.indexOf("/dist/") == 0){
        return res.sendFile(path.join(__dirname,req.path))
    }
    return next()
})

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3333, function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3333');
});