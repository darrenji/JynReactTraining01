> npm install --save axios

<br>

> app目录下创建utils目录

<br>

> utils目录下创建githubHelpers.js

<br>

	var axios = require('axios'); 
	
	var id = "YOUR_CLIENT_ID";
	var sec = "YOUR_SECRET_ID";
	var param = "?client_id=" + id + "&client_secret=" + sec;
	
	function getUserInfo (username) {
	  return axios.get('https://api.github.com/users/' + username + param);
	}
	
	var helpers = {
	 //players是一个有关用户名的数组
	  getPlayersInfo: function (players) {
	    return axios.all(players.map(function (username) {
	      return getUserInfo(username)
	    }))
	    .then(function (info) {
	      return info.map(function (user) {
	        return user.data
	      })
	    })
	    .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
	  }
	};
	
	module.exports = helpers;

<br>

> app/components/ConfirmBattle.js

<br>

	var React = require('react');
	
	function puke (obj) {
	  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
	}
	
	function ConfirmBattle (props) {
	  return props.isLoading === true
	    ? <p>LOADING</p>
	    : <div>CONFIRM BATTLE: {puke(props)}</div>
	}
	
	module.exports = ConfirmBattle;

<br>

> app/containers/ConfirmBattleContainer.js

<br>

	var React = require('react');
	var ConfirmBattle = require('../components/ConfirmBattle');
	var githubHelpers = require('../utils/githubHelpers');
	
	var ConfirmBattleContainer = React.createClass({
	  contextTypes: {
	    router: React.PropTypes.object.isRequired
	  },
	  getInitialState: function () {
	    return {
	      isLoading: true,
	      playersInfo: [],
	    }
	  },
	  componentDidMount: function () {
	    var query = this.props.location.query;
	    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
	      .then(function (players) {
	        this.setState({
	          isLoading: false,
	          playersInfo: [players[0], players[1]]
	        })
	      }.bind(this))
	  },
	  render: function () {
	    return (
	      <ConfirmBattle
	        isLoading={this.state.isLoading}
	        playersInfo={this.state.playersInfo} />
	    )
	  }
	});
	
	module.exports = ConfirmBattleContainer;

<br>

> localhost:8080

<br>

可以输入如下参赛选手：
tylermcginnis 
jake