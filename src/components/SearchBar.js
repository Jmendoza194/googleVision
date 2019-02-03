import React, { Component } from 'react';

class SearchBar extends Component{
    state = {term: 'Dogs'};

    componentWillMount() {
        this.props.onSubmit('Dogs   ');
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className=" ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div>
                        <div className="ui form">
                            <input type="text" value={this.state.term} onChange={event => this.setState({term:event.target.value})}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;