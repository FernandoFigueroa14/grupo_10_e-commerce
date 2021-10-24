import React, { useEffect, useState } from "react"
import axios from 'axios'

const ProductBox = ({ product }) => {
  return (
    <div className="col-lg-5 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">
          <div>id: {product.product_id}</div>
          <div>nombre: {product.name}</div>
          <div>descripción: {product.description}</div>
          <div>categoría: {product.category === 'male' ? 'Hombre' : product.category === 'female' ? 'Mujer' : 'Niño'}</div>
        </div>
      </div>
    </div>
  )
}

function UsersInDB() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getDataProducts = async () => {
      const responseProducts = await axios.get('/api/products')
      setProducts(responseProducts.data.data)
    }
    getDataProducts()
  }, [])

  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Productos en base de datos | D-HC
          </h5>
        </div>
          <div className="card-body">
            <div className="row">
              {products.map((product) => {return <ProductBox key={product.product_id} product={product} />})}
            </div>
          </div>
      </div>
    </div>
  );
}

export default UsersInDB