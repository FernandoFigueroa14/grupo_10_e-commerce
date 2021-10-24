import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProductBox = ({ product }) => {
  return (
    <div className="col-lg-5 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">
          <div>id: {product.product_id}</div>
          <div>nombre: {product.name}</div>
          <div>descripcion: {product.description}</div>
          <div>categoría: {product.category === 'male' ? 'Hombre' : product.category === 'female' ? 'Mujer' : 'Niño'}</div>
        </div>
      </div>
    </div>
  )
}

const Filter = () => {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('')
  let result = []
  useEffect(() => {
    const getDataProducts = async () => {
      const responseProducts = await axios.get('/api/products')
      setProducts(responseProducts.data.data)
    }
    getDataProducts()
  }, [])

  const handleSelect = (e) => {
    setCategory(e.target.value)
  }

  result = products.filter((product) => {
    return product.category === category
  })

  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Filtrar productos | D-HC
          </h5>
        </div>
        
        <div className="card-body">

          <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleSelect}>
            <option value="sc" selected>Categoria</option>
            <option value="male">Hombres</option>
            <option value="female">Mujeres</option>
            <option value="kid">Niños</option>
          </select>
          <div className="row">
            {result.length !== 0
              ? result.map((product) => {return <ProductBox key={product.product_id} product={product} />})
              : <h6 className="m-0 font-weight-bold text-gray-800"> Selecciona una categoría </h6>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter