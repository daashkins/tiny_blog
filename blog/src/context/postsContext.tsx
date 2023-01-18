import * as React from 'react'
import { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import { PostsContextType, IPost } from '../types'
import { data } from '../db.mock/db'

export const PostsContext = createContext<PostsContextType | null>(null)

const PuppyProvider = ({ children }: any) => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        axios.get('https://dummyjson.com/posts').then((response) => {
            // const data= [...response.data.posts];
            // data.map((post)=> {
            //     axios.get(`https://api.unsplash.com/search/photos?query=${post.tags[0]}&page=1&client_id=${process.env.REACT_APP_UNSPLASH}&h=200`).then((response)=>{
            //       post.image = response.data.results[Math.floor(Math.random() * 5)].urls.small;
            //       return post;
            // })
            // })

            // const dataWithImages= [...data]

            setPosts([...response.data.posts])
        })
    }, [])

    return (
        <PostsContext.Provider value={{ posts }}>
            {children}
        </PostsContext.Provider>
    )
}

export default PuppyProvider
