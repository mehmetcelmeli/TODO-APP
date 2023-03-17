import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({deleteItem, itemList}) {
  return (
    <div style={{marginTop:50}}>
    {
      itemList.map((item, index) => <TodoItem
        key={index}
        index={index}
        deleteItem={deleteItem}
        item={item}
      />
      )
    }
      
    </div>
  )
}
