import { PostStates } from "../reducer/postsReducer"

export type Post = {
    id: number,
    title: string,
    description: string,
    image: string,
}

export type AppStates = {
    postsStates: PostStates,
}