import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Item/Item'

const NewCollections = () => {

  const [new_collection, setNew_collection] = useState([]);
  const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

  useEffect(()=>{
    fetch(`${backendURL}/newcollection`)
    .then(response => response.json())
    .then(data => setNew_collection(data))
  },[])


  return (
    <div className='new-collections'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
      
    </div>
  )
}

export default NewCollections
