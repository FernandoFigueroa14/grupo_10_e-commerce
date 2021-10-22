import React, { useEffect } from 'react' 
import axios from 'axios'
import SideBar from './components/SideBar'

function App() {
  useEffect(() => {
    const getDataProducts = async () => {
      const responseProducts = await axios.get('/api/products')
      const responseUsers = await axios.get('/api/users')
      console.log(responseProducts.data.data)
      console.log(responseUsers.data.data)
    }
    getDataProducts()
  }, [])

  return (
    <SideBar />
  );
}

export default App;
