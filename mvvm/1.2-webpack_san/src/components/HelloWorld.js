import {Component} from "san";

class HelloWorld extends Component {
	constructor(options) {
	    super(options);
	}

	initData() {
        return {v: 'Hello World!'};
    }
}
HelloWorld.template = '<h1>{{v}}</h1>';
// san.inherits(HelloWorld, san.Component);

// HelloWorld.prototype.template = "<h1>{{v}}</h1>";

// HelloWorld.prototype.attached = () => {
// 	this.data.set('v', 'Hello World!');
// }

export default HelloWorld;