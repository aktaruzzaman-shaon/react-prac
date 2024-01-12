import React, { useEffect, useState } from 'react';

const Quote = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            const res = await fetch('https://api.quotable.io/random');
            console.log(res)
            const data = await res.json();
            console.log(data)
            setQuote(data)
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

export default Quote;