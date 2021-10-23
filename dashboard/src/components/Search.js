import React, { useEffect, useState } from "react"
import axios from 'axios'

const ProductBox = ({ product }) => {
  return (
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">
            <div>id: {product.product_id}</div>
            <div>nombre: {product.name}</div>
            <div>descripcion: {product.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function UsersInDB() {
  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState('')
  let result = ''

  useEffect(() => {
    const getDataProducts = async () => {
      const responseProducts = await axios.get('/api/products')
      setProducts(responseProducts.data.data)
    }
    getDataProducts()
  }, [])

  const handleInput = (event) => {
    setKeyword(event.target.value)
  }

  if (products) {
    result = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(keyword.toLowerCase())
      )
    })
  }

  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Buscar producto | D-HC
          </h5>
        </div>
        <form style={{padding: '25px'}}>
          <input type="text" class="form-control" id="InputProduct" aria-describedby="product" placeholder="Buscar" onChange={handleInput}/>
        </form>
        <div className="card-body">
          {keyword.length === 0 || result.length === 0
            ? <h6 className="m-0 font-weight-bold text-gray-800"> Sin coincidencias </h6>
            : result.map((item) => {
              return <ProductBox key={item.product_id} product={item}/>
              })
            }
          {}
        </div>
      </div>
    </div>
  );
}

export default UsersInDB
