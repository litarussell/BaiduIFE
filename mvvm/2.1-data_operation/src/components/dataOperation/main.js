import tpl from './tpl.html';
// import './tpl.css';

import {Component, DataTypes} from "san";

class dataOperation extends Component {
	constructor(options) {
	    super(options);
	}
	filters(){
		return {
    isNum: function (value, msg) {
        if (typeof +value === 'number') {
        	return msg || "数据必须是数字类型";
        }else{
        	return value;
        }
    },
    isStr: function (value, msg) {
        if (typeof value === 'string') {
        	return msg || "数据必须是字符串类型";
        }else{
        	return value;
        }
    }
}
	}
	initData() {
        return {data:{
        	name: null,
        	age: null,
        	info: null
        }};
    }
    remove(){
    	this.data.set('data.name', null);
    	this.data.set('data.age', null);
    	this.data.set('data.info', null);
    }
}
dataOperation.template = tpl;
dataOperation.filters = {
    isNum: function (value, msg) {
        if (typeof +value === 'number') {
        	return msg || "数据必须是数字类型";
        }else{
        	return value;
        }
    },
    isStr: function (value, msg) {
        if (typeof value === 'string') {
        	return msg || "数据必须是字符串类型";
        }else{
        	return value;
        }
    }
}


export default dataOperation;