import { PostAction } from "../actions";
import { GET_ALL_POSTS, GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAILED } from "../actions/types";
import { Post } from "../core/types";

export interface PostStates {
    posts: Array<Post>,
    loading: boolean,
    error?: Error,
}

const inisialState: PostStates = {
    loading: false,
    error: undefined,
    posts: [],
}

export default function postsReducer(state = inisialState, action: PostAction) {
    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                loading: true,
                error: undefined,
            }

        case GET_ALL_POSTS_SUCCESS: 
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: undefined,
            }

        case GET_ALL_POSTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            }

        default:
            return state;
    }
}

