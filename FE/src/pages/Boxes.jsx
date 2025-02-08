import React, { useEffect, useState } from 'react'
import Box from '../components/Box'
import Header from '../components/Header'
import axios from 'axios'

const Boxes = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1/item', {
      withCredentials: false,
      headers: {'Content-Type':'application/json'},
    })
      .then(response => {
        setItems(response.data);
        console.log(items);
      })
      .catch(error => {
        console.error('There was an error fetching the items!', error);
      });
  }, []);
  return (
    <>
        <Header />
        <div className='grid grid-cols-3 w-full h-full place-items-center'>
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
    </>
  )
}

export default Boxes