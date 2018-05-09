import './tpl.css';

import {Component} from "san";

class styleControl extends Component {
	constructor(options) {
	    super(options);
	}
	initData() {
        return {
        	style: false
    	};
    }
    change(){
        var style = this.data.get('style');
    	this.data.set('style', !style)
    }
}
styleControl.template = `<div id="block" class="base {{style ? 'change' : 'default'}}" on-click="change"></div>`;

export default styleControl;