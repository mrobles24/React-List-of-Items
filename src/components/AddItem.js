import React, {useState} from 'react';
import '../components-styles/AddItem.css';
import {v4 as uuidv4} from 'uuid';

function AddItem(props) {

  const [input, setInput] = useState('');

  const manageChange = e => {
    setInput(e.target.value);
  }

  const manageSend = e => {
    e.preventDefault();
    
    const newItem = {
      id: uuidv4(),
      text: input,
      selected: false
    }

    props.onSubmit(newItem);
  }


  return(
    <div className='add-items-main'>
      <p className='modal-paragraf'>Add item to list</p>
      <form className='item-form'>
        <input
          className='item-input'
          type='text'
          placeholder='Type the text here...'
          name='text'
          onChange={manageChange}
        />
      </form>
      <div className='add-items-buttons-container'>
        <button 
          onClick={manageSend}
          className='item-button' 
          id='add'
          >ADD</button>
        <button className='item-button'>CANCEL</button>
      </div>
    </div>
  )
}

export default AddItem;