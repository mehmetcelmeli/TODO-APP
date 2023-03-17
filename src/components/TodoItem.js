import React, {useState} from 'react'
import {DeleteFilled}  from '@ant-design/icons'

export default function TodoItem({item,deleteItem,index}) {

const [strikeThorugh, setStrikeThrough] = useState(false)

  const ChangeHandler = () => setStrikeThrough(!strikeThorugh)

  const styles = {
    container:{
      display:'flex',   
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      border:'2px solid red',
      paddingInline:10  
    },
    checkbox:{
marginRight:20
    },
    text:{
      textDecoration:strikeThorugh && 'line-through'
    }
  }

  return (
    <div style={styles.container}>

      <p style={styles.text}>{item.title}</p>

      <span>

    <input type="checkbox"
           onChange={ChangeHandler}
           checked={strikeThorugh}
           style={styles.checkbox}           
           >
    </input>

        <DeleteFilled onClick={()=>deleteItem(index)}/>       
      </span>

    </div>
  )
}
