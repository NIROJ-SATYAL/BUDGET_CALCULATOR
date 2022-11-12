
import './App.css';
import Form from './Components/Form'
import List from './Components/List'
import Alert from './Components/Alert'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const initialexpenses=[]


function App() {
  const [expense,setexpense]=useState(initialexpenses)
  const [charge,setCharge]=useState('')
  const [amount,setAmount]=useState('')
  const [alert,setalert]=useState({show:false})
  const [edit,setedit]=useState(false)
  const [id,setid]=useState(0)

  const chargehandler=e=>{
    
    setCharge(e.target.value);
  }
  const amounthandler=e=>{
    setAmount(e.target.value);
  }
  const alerthandle=({type,text})=>{
    setalert({show:true,type,text})
    setTimeout(()=>{
      setalert({show:false})
    },4000)

  }
   const handleclear=()=>{
    setexpense([])
    alerthandle({type:"danger" ,text:" all item deleted"})
  }
  const handleedit=(id)=>{
     let individualid=expense.find(item=>item.id===id)
    const {charge,ammount}=individualid
    setAmount(ammount)
    setCharge(charge)
    setedit(true)
    setid(id)
  }
  const handledelete=(id)=>{
     let tempexpense=expense.filter(item => item.id!==id);
    setexpense(tempexpense)
    alerthandle({type:"danger",text:"item delete successfully"})
    
  }
  const submithandler=e=>{
    e.preventDefault()
    if(charge!=='' && amount>0){
      if(edit){
        let tempexpense=expense.map(item=>{
           return item.id===id?{...item,charge:charge,ammount:amount} :item
        })
        setexpense(tempexpense)
        setedit(false)
        alerthandle({type:"success", text:"item edit successfully"})

      }
      else
      {
        const initialexpenses={id:uuidv4(),charge:charge,ammount:amount}
      setexpense([...expense,initialexpenses])
      alerthandle({type:'success',text:"item added successfully"})
      }
      
      setCharge("")
      setAmount("")

    }
    else{
      // alert part
      alerthandle({type:'danger',text:"item cannot be added"})
    }
  }
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text}/>}
      <h1>BUDGET CALCULATOR</h1>
      <main className='App'>
        <Form 
        charge={charge}
        amount={amount}
        chargehandler={chargehandler}
        amounthandler={amounthandler}
        submithandler={submithandler}

        edit={edit}
        ></Form>
        <List expense={expense}  handleclear={handleclear} handleedit={handleedit} handledelete={handledelete}></List>
        
      </main>
      <h1>
          TOTAL SPENDING: <span className='total'>
            $ {expense.reduce((acc,curr)=>{
               return (acc +=parseInt(curr.ammount) )
            },0)}
          </span>
        </h1>
    </>
  );
}

export default App;
