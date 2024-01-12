import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Axios = () => {

    const [quote, setQuote] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            const res = await axios.get('https://api.quotable.io/random');
            console.log(res.data)
            setQuote()
        }
        fetchQuote();
    }, [])

    return (
        <div>
            <div>4 ways to fetch in react app</div>

            <div>{quote?.content}</div>
        </div>
    );
};

export default Axios;