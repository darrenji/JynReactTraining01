var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
    render: function(){
        return (
            <MainContainer>
                <h2>Github擂台赛</h2>
                <p>无论你来自哪里，我们在这里决一胜负</p>
                <Link to='/playerOne'>
                    <button type='button' className='btn btn-lg btn-success'>走起</button>
                </Link>
             </MainContainer>
        )
    }
});

module.exports = Home;