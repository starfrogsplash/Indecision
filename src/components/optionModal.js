import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
    isOpen = {!!props.selectedOption}
    contentLabel = 'Selected Option'
    onRequestClose = {props.handleClearSelected}
    ariaHideApp={false}
    closeTimeoutMS = {4000}
    className = 'modal'
    >
     <h3 className = 'model__title'> Selected Option </h3>
     {props.selectedOption && <p className='model__body'> {props.selectedOption} </p>}
     <button className = 'button'onClick = {props.handleClearSelected}> okay </button>
    </Modal> 
)


export default OptionModal