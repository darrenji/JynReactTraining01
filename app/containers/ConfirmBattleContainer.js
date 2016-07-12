var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
   contextTypes: {
     router: React.PropTypes.object.isRequired  
   },
   getInitialState: function(){
     console.log('getIntialState');
     return {
         isLoading: true,
         playerInfo:[]
     }
   },
   componentWillMount: function(){
     console.log('componentWillMount');
   },
   componentDidMount: function(){
       var query = this.props.location.query;
       //根据路由查询字符串参数到github获取数据，并更新状态
       console.log('componentDidMount');
   },
   componentWillReceiveProps: function(){
       console.log('componentWillReceiveProps')  ;
   },
   componentWillUnmount: function(){
       console.log('componentWillUnmount');
   },
   render: function(){
       return (
        <ConfirmBattle 
           isLoading={this.state.isLoading}
           playersInfo={this.state.playersInfo}
        />
       );
   } 
});

module.exports = ConfirmBattleContainer;