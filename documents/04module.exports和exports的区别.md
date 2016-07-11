main.js

	'use strict';
	let requiredFile = require('./requireMe');
	
	
	console.log(requiredFile); //{}
	console.log(module.exports); //{}
	console.log(exports); //{}

以上，打印出的都是一个空对象。当使用`require`方法的时候，实际上返回的是`module.exports`,而`exports`和`module.exports`是一回事。

<br>
## `exports`和`module.exports`是一回事，***具体怎么说呢？***  ##

	exports.sth = {
		get: function(){}
	}

	module.exports.sth = {
		get: function(){}
	}
以上的写法都是等效的。

<br>

## 当使用`require`方法的时候，实际上返回的是`module.exports`,***具体怎么说呢？*** ##

requrieMe.js

	'use strict';
	
	exports.something = {
	    get: function(){}
	}

<br>

main.js

	'use strict';
	let requiredFile = require('./requireMe');
	
	console.log(requiredFile); //{something:{get: [Function]}}

<br>

大多数情况下，`module.exports`和`exports`差别不大。但有时候，两者会表现出不同的方面。

<br>

## `module.exports`和`exports`表现不同的时候 ##

requireMe.js

	'use strict';
	
	exports.something = function(){
	    console.log('hha');
	}

<br>

main.js

	'use strict';
	let requiredFile = require('./requireMe');
	
	
	console.log(requiredFile.something()); 


----------

requireMe.js

	
	'use strict';
	
	module.exports = function(){
	    console.log('haha');
	}

<br>

main.js

	'use strict';
	let requiredFile = require('./requireMe');
	
	
	console.log(requiredFile()); 








