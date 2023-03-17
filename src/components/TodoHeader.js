import React, {useState} from 'react'

export default function TodoHeader({addItem}) {

    const [todo, setTodo] = useState('');

    const ChangeHandler= (e) => {
setTodo(e.target.value)
    }

  return (
    <div>
      <h3 style={{textAlign:'center'}}>TODO List App</h3>
      <span>
    <input 
    value={todo}
    onChange={ChangeHandler}
    style={{marginRight:10,marginBottom:10, width:200,height:25}}
    type='text'
    placeholder= 'Enter a todo title'
    
    >

   </input>
   <button style={{
    width:100, 
    height:29,
    backgroundColor:'skyblue', 
   color:'#fff',
   fontWeight:'bold', 
   borderWidth:0}}
   onClick={()=> {addItem(todo);setTodo('')}}
   
   >Submit</button>
      </span>
    </div>
  )
}


