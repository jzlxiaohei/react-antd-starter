webpackJsonp([1],{

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _message = __webpack_require__(73);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _index = __webpack_require__(69);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(67);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(1);
	
	var _react3 = _interopRequireDefault(_react2);
	
	var _index5 = __webpack_require__(68);
	
	var _index6 = _interopRequireDefault(_index5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _components = {
	    _component: {}
	};
	
	var _UsersZilongWebstormProjectsReactAntdNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	    filename: '/Users/zilong/WebstormProjects/react-antd/src/App2.js',
	    components: _components,
	    locals: [module],
	    imports: [_react3.default]
	});
	
	var _UsersZilongWebstormProjectsReactAntdNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	    filename: '/Users/zilong/WebstormProjects/react-antd/src/App2.js',
	    components: _components,
	    locals: [],
	    imports: [_react3.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	    return function (Component) {
	        return _UsersZilongWebstormProjectsReactAntdNode_modulesReactTransformHmrLibIndexJs2(_UsersZilongWebstormProjectsReactAntdNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	    };
	}
	
	var dataSource = [{
	    key: '1',
	    name: '胡彦斌',
	    age: 32,
	    address: '西湖区湖底公园1号'
	}, {
	    key: '2',
	    name: '胡彦祖',
	    age: 42,
	    address: '西湖区湖底公园1号'
	}];
	
	var columns = [{
	    title: '姓名',
	    dataIndex: 'name',
	    key: 'name'
	}, {
	    title: '年龄',
	    dataIndex: 'age',
	    key: 'age'
	}, {
	    title: '住址',
	    dataIndex: 'address',
	    key: 'address'
	}];
	
	var App = _wrapComponent('_component')(React.createClass({
	    displayName: 'App',
	    getInitialState: function getInitialState() {
	        return {
	            date: ''
	        };
	    },
	    handleChange: function handleChange(value) {
	        _message2.default.info('您选择的日期是: ' + value.toString());
	        this.setState({
	            date: value
	        });
	    },
	    render: function render() {
	
	        return React.createElement(
	            'div',
	            { style: { width: 400, margin: '0 auto 100px' } },
	            React.createElement(
	                'div',
	                null,
	                '333'
	            ),
	            React.createElement(
	                'div',
	                null,
	                '222'
	            )
	        );
	    }
	}));
	
	exports.default = App;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)(module)))

/***/ }

});
//# sourceMappingURL=1.bundle.js.map