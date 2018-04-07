import React, { Component } from 'react';
import AddOptions from './AddOptions';
import Options from './options';
import Header from './Header';
import Action from './Action';
import OptionModal from './optionModal'
import '../styles/styles.scss';
import '../styles/styles.css';

class Indecision extends Component {

  state = {
    options: [],
    selectedOption: undefined
  }


  handleClearSelected = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => ({ selectedOption: option }))
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
    }
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }

  }



  render() {
    const title = 'Indecision'
    const subtitle = 'Put your life in the hands of the Machine'

    return (
      <div className="App" >
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOptions
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelected={this.handleClearSelected}
        />
      </div>
    );
  }
}

export default Indecision