import React, { useEffect, useState } from 'react';

const GetPost = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setPost(data)
                setError('')

            })
            .catch(() => {
                setLoading(false)
                setPost({})
                setError('Theres was a problem')
            })
    }, [])
     

    return (
        <div>
            {loading ? 'Loading ....' : post.title}
            {error ? error : null}
        </div>
    );
};

export default GetPost;