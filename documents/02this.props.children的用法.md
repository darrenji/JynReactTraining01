> app/index.html

<br>

	var ProfileLink = React.createClass({
	    render: function(){
	        return (
	            <div>
	                <a href={'https://www.github.com/' + this.props.username}>
	                    {this.props.username}
	                </a>
	            </div>
	        )
	    }
	});

<br>

***是否可以把a标签替换成这样吗？***

    <Link href={'https://www.github.com/' + this.props.username}>
        {this.props.username}
    </Link>

***为此，我们要写一个组件。***

<br>

	var Link = React.createClass({
	    render: function(){
	        return (
	            <span>hello</span>
	        )
	    }
	})
	
	var ProfileLink = React.createClass({
	    render: function(){
	        return (
	            <div>
	                <Link href={'https://www.github.com/' + this.props.username}>
	                    {this.props.username}
	                </Link>
	            </div>
	        )
	    }
	});

<br>

> localhost:8080

<br>

发现：ProfileLink组件中的`this.props.username`部分并没有显示出来！如何显示呢？

<br>

> app/index.js

<br>


	var Link = React.createClass({
	    render: function(){
	        return (
	            <span>{this.props.children}</span>
	        )
	    }
	})
	
	var ProfileLink = React.createClass({
	    render: function(){
	        return (
	            <div>
	                <Link href={'https://www.github.com/' + this.props.username}>
	                    {this.props.username}
	                </Link>
	            </div>
	        )
	    }
	});

<br>

> localhost:8080

<br>

`this.props.username`部分被显示了出来。检查页面元素：

	<span>darren</span>
Link组件就好像是一个包裹层，当`<span>{this.props.children}</span>`定义的时候，就是把所有的内容显示在`<span></span>`之间。

<br>

但是，我们想点击Link组件可以导航到github上的页面。***怎么做呢？***

<br>

> app/index.js

<br>

	var Link = React.createClass({
	    changeURL: function(){       
	        window.location.replace(this.props.href)
	    },    
	    render: function(){
	        return (
	            <span
	                style={{color: 'blue', cursor: 'pointer'}}
	                onClick={this.changeURL}
	            >
	                {this.props.children}
	            </span>
	        )
	    }
	})
	
	var ProfileLink = React.createClass({
	    render: function(){
	        return (
	            <div>
	                <Link href={'https://www.github.com/' + this.props.username}>
	                    {this.props.username}
	                </Link>
	            </div>
	        )
	    }
	});

<br>

> localhost:8080

<br>







