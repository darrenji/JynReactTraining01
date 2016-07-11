var React = require('react');

var PromptContainer = React.createClass({
    render: function(){
        console.log(this);
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
                <h1>{this.props.route.header}</h1>
                <div className="col-sm-12">
                    <form>
                        <div className="form-group">
                           <input 
                                className="form-control"
                                placeholder="github username"
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