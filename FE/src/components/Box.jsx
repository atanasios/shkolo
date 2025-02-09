import React from 'react';
import { Link } from 'react-router-dom';

const Box = ({ id, item, link }) => {
  return (
    <Link 
      to={`/${link}`} 
      className="w-80 h-48 my-6 mx-2 border-3 border-black text-3xl text-center flex items-center justify-center"
    >
      {item ? item.title : "+"}
    </Link>
  );
};

export default Box;