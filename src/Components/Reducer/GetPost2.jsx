import React, { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    error: "",
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                loading: false,
                post: action.result,
                error: ''
            }
        case 'error':
            return {
                loading: false,
                post: {},
                error: 'There was a problem in fetching'
            }
        default:
            return state;
    }
}

const GetPost2 = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholde.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'success', result: data })

            })
            .catch(() => {
                dispatch({ type: 'error' })
            })
    }, [])

    return (
        <div>
            <div>
                {state.loading ? 'Loading ....' : state.post.title}
                {state.error ? state.error : null}
            </div>
        </div>
    );
};

export default GetPost2;