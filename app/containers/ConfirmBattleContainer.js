var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
   contextTypes: {
     router: React.PropTypes.object.isRequired  
   },
   getInitialState: function(){
     return {
         isLoading: true,
         playerInfo:[]
     }
   },
   componentDidMount: function(){
       var query = this.props.location.query;
       //根据路由查询字符串参数到github获取数据，并更新状态
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