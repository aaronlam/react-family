webpackJsonp([1],{"1saR":function(module,exports,__webpack_require__){"use strict";(function(module){Object.defineProperty(exports,"__esModule",{value:!0});var _getPrototypeOf=__webpack_require__("Zx67"),_getPrototypeOf2=_interopRequireDefault(_getPrototypeOf),_classCallCheck2=__webpack_require__("Zrlr"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=__webpack_require__("wxAW"),_createClass3=_interopRequireDefault(_createClass2),_possibleConstructorReturn2=__webpack_require__("zwoO"),_possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2),_inherits2=__webpack_require__("Pf15"),_inherits3=_interopRequireDefault(_inherits2),_react=__webpack_require__("U7vG"),_react2=_interopRequireDefault(_react),_reactRedux=__webpack_require__("RH2O"),_userInfo=__webpack_require__("BVBi");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}!function(){var e=__webpack_require__("rGbO").enterModule;e&&e(module)}();var UserInfo=function(_Component){function UserInfo(){return(0,_classCallCheck3.default)(this,UserInfo),(0,_possibleConstructorReturn3.default)(this,(UserInfo.__proto__||(0,_getPrototypeOf2.default)(UserInfo)).apply(this,arguments))}return(0,_inherits3.default)(UserInfo,_Component),(0,_createClass3.default)(UserInfo,[{key:"render",value:function(){var e=this,r=this.props.userInfo,t=r.userInfo,_=r.isLoading,n=r.errorMsg;return _react2.default.createElement("div",null,_?"请求信息中...":n||_react2.default.createElement("div",null,_react2.default.createElement("p",null,"用户信息："),_react2.default.createElement("p",null,"用户名：",t.name),_react2.default.createElement("p",null,"介绍：",t.intro)),_react2.default.createElement("button",{onClick:function(){e.props.getUserInfo()}},"请求用户信息"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),UserInfo}(_react.Component),_default=(0,_reactRedux.connect)(function(e){return{userInfo:e.userInfo}},{getUserInfo:_userInfo.getUserInfo})(UserInfo);exports.default=_default,function(){var e=__webpack_require__("rGbO").default,r=__webpack_require__("rGbO").leaveModule;e&&(e.register(UserInfo,"UserInfo","D:/FrontendProject/react-family/src/pages/UserInfo/UserInfo.js"),e.register(_default,"default","D:/FrontendProject/react-family/src/pages/UserInfo/UserInfo.js"),r(module))}()}).call(exports,__webpack_require__("3IRH")(module))}});