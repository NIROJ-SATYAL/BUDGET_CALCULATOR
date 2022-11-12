import React from 'react'
import Item from './Item'
import {MdDelete} from 'react-icons/md'

const List = ({expense ,handleclear , handledelete ,handleedit}) => {
  return (
    <>
    <ul className='list'>
      {expense.map((expenses)=>{
        return <Item key={expenses.id}
         expense={expenses}
         handledelete={handledelete}
         handleedit={handleedit}/>
      })}
    </ul>
    {expense.length>0 && (<button className='btn' onClick={handleclear}>clear expenses
    <MdDelete className='btn-icon'/>
    
    </button>)}
    </>
  )
}

export default List