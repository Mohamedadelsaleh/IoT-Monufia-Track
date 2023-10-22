import axios from 'axios';
import React, {useEffect, useState} from 'react'

function FetchDataFromAPI() {

    const [posts, setPosts]= useState([]);

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
            setPosts(response.data)
        })
        .catch(err => console.error(err))
    },[])

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchDataFromAPI;