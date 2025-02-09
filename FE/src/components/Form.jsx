import React, { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
    const [title, setTitle] = useState('');
    const [url, setLink] = useState('');
    const [color, setColor] = useState('');
    const id = window.location.pathname.split("/")[1];
    

    const getCsrfToken = async () => {
        try {
            await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
                withCredentials: true
            });
            console.log("CSRF token set!");
        } catch (error) {
            console.error("Error setting CSRF token:", error);
        }
    };

    const handleSubmit = async () => {
        try {
            await getCsrfToken();
            console.log("ID:", id, "Title:", title, "URL:", url, "Color:", color);
            

            const response = await axios.post(
                "http://127.0.0.1:8000/api/item",
                { id, title, url, color },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );

            console.log("Success:", response.data);
        } catch (error) {
            console.error("Error:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-30">
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