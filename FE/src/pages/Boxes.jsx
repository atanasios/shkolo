import React, { useEffect, useState } from 'react';
import Box from '../components/Box';
import Header from '../components/Header';
import axios from 'axios';

const Boxes = () => {
    const [items, setItems] = useState([]);

    const getCsrfToken = async () => {
        try {
            await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
                withCredentials: true
            });
            console.log("CSRF token set!",);
        } catch (error) {
            console.error("Error setting CSRF token:", error);
        }
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                await getCsrfToken();
                const response = await axios.get('http://127.0.0.1:8000/api/item', {
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/json' },
                });

                setItems(response.data.item);
                console.log("Fetched items:", response.data.item);
                
            } catch (error) {
                console.error('There was an error fetching the items!', error);
            }
        };

        fetchItems();
    }, []);

    return (
      <>
  <Header />
  <div className='grid grid-cols-3 w-full h-full place-items-center'>
    {[...Array(9)].map((_, index) => {
      const boxId = index + 1;
      const matchedItem = items.find(item => item.id === boxId);

      if (matchedItem && matchedItem.url) {
        const color = `text-${matchedItem.color}-500`;
        console.log(color);
        

        return (
          <a
            key={boxId}
            href={matchedItem.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`w-80 h-48 my-6 mx-2 border-3 border-black text-3xl text-center flex items-center justify-center ${color}`}>
              {matchedItem.title}
            </div>
          </a>
        );
      }

      return <Box key={boxId} id={boxId} link={boxId} item={matchedItem} />;
    })}
  </div>
</>
    );
};

export default Boxes;