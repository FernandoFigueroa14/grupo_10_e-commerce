import React, { useEffect } from 'react' 
import axios from 'axios'

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
    <p>React</p>
  );
}

export default App;
