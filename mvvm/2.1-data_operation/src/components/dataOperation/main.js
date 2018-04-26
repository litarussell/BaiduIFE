import tpl from './tpl.html';
// import './tpl.css';

import {Component} from "san";

class dataOperation extends Component {
	constructor(options) {
	    super(options);
	}
	initData() {
        return {
        	data:{
	        	name: 'lita',
	        	age: 21,
	        	info: '测试'
        	}
    	};
    }
    remove(){
    	this.data.set('data.name', null);
    	this.data.set('data.age', null);
    	this.data.set('data.info', null);
    }
}
dataOperation.template = tpl;

// dataOperation.dataTypes = {
//     'data.name': DataTypes.string
// }
dataOperation.filters = {
    isNum: function (value, msg) {
        if (Number.isNaN(+value)) {
        	return msg || "数据必须是数字类型";
        } else {
        	return value;
        }
    },
    isStr: function (value, msg) {
        if (/[a-zA-Z]|[\u4E00-\u9FA5]/g.test(value)) {
        	return value;
        } else {
        	return msg || "数据必须是字符串类型";
        }
    }
}


export default dataOperation;