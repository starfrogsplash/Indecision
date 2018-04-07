import React, { Component } from 'react';

class AddOptions extends Component {
  state = {
    error: undefined
  }
 
    handleAddOption = (event) => {
      event.preventDefault()
      let option = event.target.elements.option.value.trim()
      const error = this.props.handleAddOption(option)
      this.setState(() => ({ error }))
  
      if(!error){
        event.target.elements.option.value = ''
      }
    }
  
    render() {
      return (
        <div>
          {this.state.error && <p className = 'addOption-error'> {this.state.error}</p>}
          <form className = 'add-option' 
            onSubmit={this.handleAddOption} >
            <input className = 'add-option__input' type="text" name='option' />
            <button className = 'button' > Add Option</button>
          </form> 
        </div>
      )
    }
  }


  export default AddOptions;