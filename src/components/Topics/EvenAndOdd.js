import React, { Component } from 'react';

class EvenAndOdd extends Component {

    constructor () {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput:  ''
        }
    }

    handleUserInput (value) {
        this.setState({userInput: value})
    }

    assignEvenAndOdds (userInput) {
        let arr = userInput.split(',')
        let evens = []
        let odds = []

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10))
            }
            else {
                odds.push(parseInt(arr[i], 10))
            }
        }
        this.setState({evenArray: evens, oddArray: odds})
    }

    render () {
        return (
            //something went terribly wrong with the formatting of the page.
            //I spent about three hours on this and ended up using the solution guide :( it makes sense when i read it now though
            <div className='evenAndOddPB'>
                <h4> Evens and Odds </h4>
                <input className='inputLine' onChange={ (e) => this.handleUserInput(e.target.value)} />
                <button className='confirmationButton' onClick={ () => this.assignEvenAndOdds(this.state.userInput)}> Sort </button>
                <span className='resultsBox'> Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className='resultsBox'> Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}

export default EvenAndOdd




