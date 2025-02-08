import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [color, setColor] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/item",
                { title, link, color },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: false,
                }
            );

            console.log("Success:", response.data);
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="flex flex-col items-center align-middle justify-center mt-30">
            <div className="flex pt-10">
                <p className="text-lg w-12">Title:</p>
                <input onChange={(e) => setTitle(e.target.value)} className="ml-4 w-72 rounded-lg pl-3 h-8 border-3 border-black focus:outline-none" />
            </div>
            <div className="flex pt-10">
                <p className="text-lg w-12">Link:</p>
                <input onChange={(e) => setLink(e.target.value)} className="ml-4 w-72 rounded-lg pl-3 h-8 border-3 border-black focus:outline-none" />
            </div>
            <div className="flex pt-10">
                <p className="text-lg w-12">Color:</p>
                <input onChange={(e) => setColor(e.target.value)} className="ml-4 w-72 rounded-lg pl-3 h-8 border-3 border-black focus:outline-none" />
            </div>

            <button onClick={handleSubmit} className="border-2 border-black rounded-lg w-24 h-12 mt-10 text-lg hover:border-red-500">Submit</button>
        </div>
    );
};

export default Form;