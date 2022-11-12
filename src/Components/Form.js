import React from 'react'
import { MdSend } from 'react-icons/md'

const Form = ({charge,amount,chargehandler,amounthandler,submithandler,edit}) => {
  return (
    <form onSubmit={submithandler}>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>charge</label>
          <input className='form-control'
          type='text'
          name='charge'
          id='charge'
          placeholder='e.g.rent'
          value={charge} 
          onChange={chargehandler}/>

        </div>
        <div className='form-group'>
          <label htmlFor='amount'>amount</label>
          <input className='form-control'
          type='number'
          name='amount'
          id='amount'
          placeholder='e.g.1000'
          value={amount} 
          onChange={amounthandler}/>

        </div>
      </div>
      <button type='Submit' className='btn'>
        {edit?"edit":"submit"}
        <MdSend className='btn-icon'/>
      </button>
    </form>
  )
}

export default Form