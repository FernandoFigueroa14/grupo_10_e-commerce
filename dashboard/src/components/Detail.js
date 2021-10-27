import React, { useEffect, useState } from "react"
import axios from 'axios'

const ProductBox = ({ product }) => {
  if (!product.product_id)
    return null
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

const UserBox = ({ user }) => {
  if (!user.user_id)
    return null
  return (
    <div className="col-lg-12 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">
            <div>id: {user.user_id}</div>
            <div>email: {user.emailUser}</div>
            <div>nombre: {user.nameUser}</div>
            <div>apellido: {user.lastNameUser}</div>
            <div>fecha de nacimiento: {user.birth_date}</div>
            <img src={user.profilePic} class="img-fluid" alt="Responsive image" style={{margin: '15px'}}></img>
        </div>
      </div>
    </div>
  )
}

function DetailProduct() {
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])
  const [product, setProduct] = useState({})
  const [user, setUser] = useState({})
  const [input, setInput] = useState('')
  const [selection, setSelection] = useState(true)

  // true => users
  // false => products

  useEffect(() => {
    const getDataProducts = async () => {
      const responseProducts = await axios.get('/api/products')
      const responseUsers = await axios.get('/api/users')
      setProducts(responseProducts.data.data)
      setUsers(responseUsers.data.data)
    }
    getDataProducts()
  }, [])

  const search = async (event) => {
    event.preventDefault()

    setUser({})
    setProduct({})

    let existsUser = null
    let existsProduct = null

    if (selection) {
      existsUser = users.find(user => user.user_id === parseInt(input))
      if (existsUser) {
        const resUser = await axios.get('/api/users/' + input)
        setUser(resUser.data.data)
      }
    } else {
      existsProduct = products.find(product => product.product_id === parseInt(input))
      if (existsProduct) {
        const resProduct = await axios.get('/api/products/' + input)
        setProduct(resProduct.data.data)
      }
    } 
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Detalles | Usuariaos y Productos | D-HC
          </h5>
        </div>
        <form style={{padding: '25px'}} onSubmit={search}>
          <div className="col-lg-7">
            <input 
              type="text" 
              class="form-control" 
              aria-describedby="product" 
              placeholder={selection ? "ID de usuario" : "ID de producto"} 
              onChange={handleChange}
              style={{marginBottom: '25px'}} 
            />
            <button type="submit" class="btn btn-primary">Buscar {selection ? "usuario" : "producto"} </button>
          </div>  
          <div className="col-lg-2">
              <select class="custom-select" aria-label="Default select example" onChange={() => {setSelection(!selection)}} style={{marginTop: '25px'}}>
                <option selected>Usuarios</option>
                <option >Productos</option>
              </select>
            </div>
        </form>
        <div className="card-body">
          <div className="row">
            {Object.keys(product).length === 0 && Object.keys(user).length === 0
              ? <div className="col-lg-3 mb-4" style={{marginLeft: '20px'}}><h6 className="m-0 font-weight-bold text-gray-800"> {selection ? "usuario no encontrado" : "producto no encontrado"} </h6></div>
              : <div>
                  <ProductBox product={product}/> <UserBox user={user}/>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct