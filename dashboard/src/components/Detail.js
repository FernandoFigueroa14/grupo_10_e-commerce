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

  useEffect(() => {
    const getDataProducts = async () => {
      const responseProducts = await axios.get('/api/products')
      const responseUsers = await axios.get('/api/users')
      setProducts(responseProducts.data.data)
      setUsers(responseUsers.data.data)
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

  const handleInputUser = async (event) => {
    const existsUsers = users.filter(user => user.user_id === parseInt(event.target.value))
    if (existsUsers.length !== 0) {
      const resUser = await axios.get('/api/users/' + event.target.value)
      setUser(resUser.data.data)
    } else {
      setUser({})
    }
  }

  return (
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Detalles | Usuariaos y Productos | D-HC
          </h5>
        </div>
        <form style={{padding: '25px'}}>
          <input type="text" class="form-control" id="InputProduct" aria-describedby="product" placeholder="ID de producto" onChange={handleInput} style={{marginBottom: '25px'}}/>
          <input type="text" class="form-control" id="InputUser" aria-describedby="user" placeholder="ID de usuario" onChange={handleInputUser}/>
        </form>
        <div className="card-body">
          <div className="row">
            {Object.keys(product).length === 0 && Object.keys(user).length === 0
              ? <h6 className="m-0 font-weight-bold text-gray-800"> Sin coincidencias </h6>
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