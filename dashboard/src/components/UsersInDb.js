import React, { useEffect, useState } from "react"
import axios from 'axios'

const UserBox = ({ user }) => {
  return (
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">
            <div>id: {user.user_id}</div>
            <div>Nombre: {user.nameUser}</div>
            <div>email: {user.emailUser}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function UsersInDB() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getDataProducts = async () => {
      const responseUsers = await axios.get('/api/users')
      setUsers(responseUsers.data.data)
    }
    getDataProducts()
  }, [])

  return (
    <div className="col-lg-7 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Usuarios en base de datos | D-HC
          </h5>
        </div>
        <div className="card-body">
          {users.map((user) => {return <UserBox user={user} />})}
        </div>
      </div>
    </div>
  );
}

export default UsersInDB
