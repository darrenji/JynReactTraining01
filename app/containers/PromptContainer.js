var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
                username: ''
            }
    },
    onUpdateUser: function(e){
        this.setState({
            username: e.target.value
        })
    },
    onSubmitUser: function(e){
        e.preventDefault();
        var username = this.state.username;
        this.setState({
            username: ''
        });
        
        if(this.props.routeParams.playerOne){
            //导航到对决页
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            })
        } else {
            //导航到第二个参赛选手
            this.context.router.push('/playerTwo/' + this.state.username);
        }
    },
    render: function(){
       
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
                <h3>{this.props.route.header}</h3>
                <div className="col-sm-12">
                    <form onSubmit={this.onSubmitUser}>
                        <div className="form-group">
                           <input 
                                className="form-control"
                                placeholder="github username"
                                onChange={this.onUpdateUser}
                                value={this.state.username}
                                type="text"
                            />
                        </div>
                    </form>
                </div>
                <div className="form-group col-sm-4 col-sm-offset-4">
                    <button
                        className="btn btn-block btn-success"
                        type="submit">
                    继续
                    </button>
                </div>
            </div>
        )
    }
});

module.exports = PromptContainer;