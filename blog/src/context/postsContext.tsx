import * as React from 'react'
import { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import { PostsContextType, IPost } from '../types'

export const PostsContext = createContext<PostsContextType | null>(null)

const PostsProvider = ({ children }: any) => {
    const [posts, setPosts] = useState<IPost[]>([])
    const [section, setShowSection] = useState<string>('all')

    useEffect(() => {
        axios.get('https://dummyjson.com/posts').then((response) => {
            setPosts([...response.data.posts])
        })
    }, [])

    return (
        <PostsContext.Provider value={{ posts, section, setShowSection }}>
            {children}
        </PostsContext.Provider>
    )
}

export default PostsProvider
