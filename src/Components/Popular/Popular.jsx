import React, { useEffect } from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = () => {

  const [popularProducts, setPopularProducts] = React.useState([]);
  const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

  useEffect(()=>{
    fetch(`${backendURL}/popularinwomen`)
    .then((response) => response.json())  
    .then((data) => setPopularProducts(data))
  },[])
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {popularProducts.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
      
    </div>
  )
}

export default Popular
