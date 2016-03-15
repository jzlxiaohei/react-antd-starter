
import App  from './App';
//import App2 from './App2'
import './stores'

import { Router, Route ,hashHistory,IndexRoute} from 'react-router'


const Layout = React.createClass({
    render() {
        return (
            <div>
                <div class='page'>
                    {this.props.children}
                </div>
            </div>
        )
    }
});

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="/app2" getComponents={(location,cb)=>{
                require.ensure([],(require)=>{
                    var app2 = require('./App2')
                    cb(null,app2.default)
                })
            }}/>
            <IndexRoute component={App}/>
        </Route>
    </Router>
), document.getElementById('root'))
