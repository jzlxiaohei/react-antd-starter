#react + ant.design starter

# feature
1.react-hmre for development

2.use Rxjs (rx-lite.js) for state manager

3.jquery,react,react-dom, rx exports to global

4.react-router for router

# how to development
1. `gulp lib`to build lib.js(lib.min.js)

2. `node devServer` to start dev server

3. open localhost:3333 (you can change the port in devServer.js)

# some points for antd
    
 build with `antd` is slow, now provide a compiled-version(`lib/antd.js`,`lib/antd.css`)
    
 if you wanna use compiled version
 
 1. add `antd:antd` to `externals` for `webpack`(dev,prod)
 2. remove `antd` from `plugins` in `.babelrc` file
 3. script for `antd.js`,link for `antd.css`
    
    