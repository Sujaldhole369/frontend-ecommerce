import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import {useParams} from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProduct/RelatedProducts';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();


    const product = all_product.find((e) => e.id === Number(productId));

    if(!product){
      return <div>Product not found</div>
    }

  return (
    <div>
      {product ? (
                <Breadcrum product={product} />
            ) : (
                <div>Product not found</div>
            )}
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product;
