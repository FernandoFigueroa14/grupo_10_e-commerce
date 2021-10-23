import React, { useEffect, useState } from "react"
import axios from 'axios'

const UserBox = ({ product }) => {
  return (
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">
            <div>id: {product.product_id}</div>
            
          </div>
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
      // const responseUsers = await axios.get('/api/users')
      // console.log(responseProducts.data.data)
      setProducts(responseProducts.data.data)
    }
    getDataProducts()
  }, [])

  return (
    <div className="col-lg-7 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Products in Data Base D-HC
          </h5>
        </div>
        <div className="card-body">
          {products.map((product) => {return <UserBox product={product} />})}
        </div>
      </div>
    </div>
  );
}

export default UsersInDB