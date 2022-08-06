import axios from "../core/_axios";
import { Post } from "../core/types";
import { GET_ALL_POSTS, GET_ALL_POSTS_SUCCESS, GET_ALL_POSTS_FAILED } from "./types";

export type PostAction = {
    type: string,
    payload?: Array<Post>,
    error?: Error,
};

/* --------------------------- Dispatch Type --------------------------- */
type AllDispatch = (arg: PostAction) => (PostAction);

export const getAllPosts = () => {
    return async (dispatch: AllDispatch) => {
        dispatch({
            type: GET_ALL_POSTS,
            error: undefined,
        })
        try {
            const result = await axios.get('/api/v1/mock-data');
            const data: Array<Post> = result.data.data.data;
            dispatch({
                type: GET_ALL_POSTS_SUCCESS,
                payload: data,
                error: undefined,
            })
          } catch (error) {
            dispatch({
                type: GET_ALL_POSTS_FAILED,
                error: error as Error,
            })
          }
    }
}