import React, { Component } from 'react';

class Counter extends Component {
     
    state = { 
        count:0,
        imageUrl: 'https://picsum.photos/200',
        matches : ['team1 : team2','team3 : team4','team5 : team6','team7 : team8']
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? <h5>Zero</h5> : <h3>{count}</h3>
    }

    handleIncrement = () => {
        console.log('Increment', this);
        this.setState({count: this.state.count+1})
    }

    styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    render() { 

       
       
        return (
        <div> 
        <span style={this.styles} className={this.getBadgeClasses()} >{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-info btn-lg">Increment</button>
          
        </div>
        )
    }


    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }
}
 
export default Counter ;