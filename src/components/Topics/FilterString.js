import React, { Component } from 'react';

class FilterString extends Component {

    constructor () {
        super();

        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredNames: []
        }
    }

    handleChange (value) {
        this.setState({userInput: value})
    }

    filterNames (userInput) {
        let filtered = [];

        for (let i = 0; i < this.state.names.length; i++) {
            if ( this.state.names[i].includes(userInput) ){
                filtered.push(this.state.names[i])
            }
        }
        this.setState({ filteredNames: filtered })
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Names: { JSON.stringify(this.state.names, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } />
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered: { JSON.stringify(this.state.filteredNames, null, 10) }</span>
            </div>
        )
    }
}

export default FilterString