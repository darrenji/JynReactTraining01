var React = require('react');
var transparentBg = require('../styles').transparentBg;

var PromptContainer = React.createClass({
    
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
    render: function(){
       
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
                <h3>{this.props.route.header}</h3>
                <div className="col-sm-12">
                    <form>
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