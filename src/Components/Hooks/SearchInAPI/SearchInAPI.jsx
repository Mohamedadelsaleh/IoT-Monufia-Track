import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SearchInAPI() {
    const [post, setPost]= useState({});
    const [id, setId]= useState(1);

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log(response.data)
            setPost(response.data)
        })
        .catch(err => console.error(err))
    },[id])

    return (
        <div>
            <input type='text' value={id} onChange={ e => setId(e.target.value)} />
            <ul>
                {post.title}
            </ul>
        </div>
    )
}

export default SearchInAPI;