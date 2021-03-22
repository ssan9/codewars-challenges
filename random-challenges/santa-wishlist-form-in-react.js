// Santa wants to simplify his life and offer children the possiblity to enter their wishlist via an online form.

// The form should be a React component and should contain:

// an input field for the child's name (with id 'name')

// a text area to describe the wish (id: 'wish')

// a drop-down indicating the priority of the wish, from 1 to 5 - default is 1 (id: 'priority')

// the keys in the state to store the corresponding values should be named the same as the element's id

// an onSubmit action calling the function handleSubmit

// a function called handleSubmit, which

// calls send (a function that is already provided as part of the injected properties props)
// passes the current state as a parameter to send
// calls event.preventDefault
// it should be a controlled component (i.e. using onChange to bind input to the component's state)

// Further reading:

// React Forms: https://reactjs.org/docs/forms.html

// Learn about Controlled Components: https://www.codewars.com/kata/control-the-beast-controlled-components-in-reactjs

import React from 'react';

export default class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      wish: '',
      priority: 1
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
   handleChange(event){ 
    this.setState({ 
      [event.target.name] : event.target.value 
    });
  } 
  
   handleSubmit(event){ 
    event.preventDefault() 
    this.props.send(this.state); 
  } 
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <input
            id="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
         />
        <textarea id="wish" name="wish" value={this.state.wish} onChange={this.handleChange}>{this.state.wish}</textarea>       
        <select name="priority" value={this.state.priority} id="priority" onChange={this.handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        <input type='submit' value="Submit" />
      </form>
    );
  }
};
