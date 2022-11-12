import React from 'react'
import { MdDelete,MdEdit } from 'react-icons/md'

const Item = ({expense, handledelete,handleedit}) => {
   const {id,charge,ammount}=expense
  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{charge}</span>
        <span className='amount'>{ammount}</span>

      </div>
      <div>
        <button className='edit-btn' aria-label='edit button' onClick={()=>handledelete(id)}>
          <MdDelete/>

        </button>
        <button className='clear-btn' aria-label='delete button' onClick={()=>handleedit(id)}>
          <MdEdit/>
        </button>
      </div>
    </li>
    
  )
}

export default Item