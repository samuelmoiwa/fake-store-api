import { React, useState, useEffect } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const { data } = await axios.get('https://fakestoreapi.com/products');
      setProducts(data);
      console.log(data);
      setLoading(false);
    }
    fetchProducts();
  },[])

  return (
  <div>
    { loading ? <h1>Loading...</h1> : <h1>Products</h1>}

    { products.map((product) => (
      <div className='products_layout'> 
        <div key={product.id} className='product_card'>
          <div className='product_image'> <img src={ product.image} alt='#'/> </div>
          <h1 className='product_title'> title </h1>
          <h1 className='product_category'> category </h1>
          <h1 className='product_price'> price </h1>
        </div>
      </div>  
    ))}
  </div>
  );
  
}

export default Products;
