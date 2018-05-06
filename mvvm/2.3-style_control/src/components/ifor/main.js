import tpl from './tpl.html';
import './tpl.css';

import {Component} from "san";

class ifor extends Component {
	constructor(options) {
	    super(options);
	}
	initData() {
        return {
        	data: [],
    	};
    }
    add(){
    	let name = this.input ? this.input.value : 
            (this.input = document.getElementsByTagName('input')[0]).value;
            
        let state = this.select ? this.select.value :
            (this.select = document.getElementsByTagName('select')[0]).value;

        this.data.push('data', [name, state]);
    }
    remove(index){
        this.data.removeAt('data',index);
    }
    up(index){
        this.data.set(`data[${index}][1]`,'合格');
    }
}
ifor.template = tpl;

export default ifor;