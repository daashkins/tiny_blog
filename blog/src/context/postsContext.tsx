import * as React from 'react'
import { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import { PostsContextType, IPost } from '../types'

export const PostsContext = createContext<PostsContextType | null>(null)

const PuppyProvider = ({ children }: any) => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        axios.get('https://dummyjson.com/posts').then((response) => {
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
