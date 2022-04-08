(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

const messages = {
  greeting: 'Test Greeting'
};

const hello = () => {
  console.log(`${messages.greeting}`);
};

hello();

})));
//# sourceMappingURL=index.js.map
