import './style.css';

import {Component} from "san";

// 子组件
class child extends Component {
    constructor(options) {
        super(options);
    }
    initData() {
        return {
            value: ""
        };
    }
    tell(e){
        e.preventDefault();
        this.dispatch('msg', this.data.get('value'));
    }
}
child.template = `
    <form>
        <label for="">子组件：</label>
        <input type="text" value="{= value =}">
        <button on-click="tell">通知父组件</button>
    </form>
`;

// 父组件
class parent extends Component {
    constructor(options) {
        super(options);
    }
    initData() {
        return {
            value: ""
        };
    }
}
parent.components = {
    'ui-child': child
}
parent.template = `
    <div id="parent">
        <ui-child></ui-child>
        <span>我是父组件：</span>
        <span>{{ value == '' ? "静静等待用户输入" : value }}</span>
    </div>
`;
parent.messages = {
    'msg': function(arg){
        console.log(arg);
        this.data.set('value', arg.value);
        this.dispatch('msg', arg.value);
    }
}

// 更高的父组件
class eventHanding extends Component {
	constructor(options) {
	    super(options);
	}
    initData() {
        return {
            value: ""
        };
    }
}
eventHanding.components = {
    'ui-parent': parent
}
eventHanding.template = `
    <div id="grandpa">
        <ui-parent></ui-parent>
        <span>我是更高层的父组件：</span>
        <span>{{ value == '' ? "我也静静等待用户输入" : value }}</span>
    </div>
`;
eventHanding.messages = {
    'msg': function(arg){
        console.log(arg);
         this.data.set('value', arg.value);
    }
}

export default eventHanding;