System.register(['lodash'], function () {
	'use strict';
	var lodash;
	return {
		setters: [function (module) {
			lodash = module.default;
		}],
		execute: function () {

			const el = document.createElement('h1');
			const words = lodash.padEnd("Hello, World", 15, '!');
			const text = document.createTextNode(words);
			el.appendChild(text);

			document.body.appendChild(el);

		}
	};
});
//# sourceMappingURL=hello.js.map
