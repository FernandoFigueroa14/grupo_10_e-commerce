import React, { useEffect, useState } from "react"
import axios from 'axios'

const ProductBox = ({ product }) => {
  return (
      <div className="col-lg-12 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">
            <div>id: {product.product_id}</div>
            <div>nombre: {product.name}</div>
            <div>descripcion: {product.description}</div>
            <div>categoría: {product.category === 'male' ? 'Hombre' : product.category === 'female' ? 'Mujer' : 'Niño'}</div>
            <div>talla: {product.size}</div>
            <div>precio: ${product.price}</div>
            <img src={product.imgProduct} class="img-fluid" alt="Responsive image" style={{margin: '15px'}}></img>
          </div>
        </div>
      </div>
  )
}

function DetailProduct() {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})

  useEffect(() => {
    const getDataProducts = async () => {
      const responseProducts = await axios.get('/api/products')
      setProducts(responseProducts.data.data)
    }
    getDataProducts()
  }, [])

  const handleInput = async (event) => {
    const existsProduct = products.filter(product => product.product_id === parseInt(event.target.value))
    if (existsProduct.length !== 0) {
      const resProduct = await axios.get('/api/products/' + event.target.value)
      setProduct(resProduct.data.data)
    } else {
      setProduct({})
    }
  }

  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Detalle de producto | D-HC
          </h5>
        </div>
        <form style={{padding: '25px'}}>
          <input type="text" class="form-control" id="InputProduct" aria-describedby="product" placeholder="ID de producto" onChange={handleInput}/>
        </form>
        <div className="card-body">
          <div className="row">
            {Object.keys(product).length === 0
              ? <h6 className="m-0 font-weight-bold text-gray-800"> Sin coincidencias </h6>
              : <ProductBox product={product}/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct