import React from 'react'
import ItemList from './ItemList'

const ItemMap = (props) => {
  return (
    <div>
      {props.task && props.task.map((item, idx)=>{
        return <ItemList item={item} key={idx} idx={idx} editBtn={props.editBtn} rmvbtn={props.rmvbtn}/>
      })}
    </div>
  )
}

export default ItemMap
