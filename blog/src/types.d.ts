export interface IPost {
    id: string
    title: string
    body: string
    userId: number
    tags: string[]
    reactions: number
    image: string
}
export type PostsContextType = {
    posts: IPost[]
}
