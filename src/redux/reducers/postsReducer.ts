import { createSlice } from "@reduxjs/toolkit";
import { Card } from "../../common/types";

type PostState = {
  selectedPost: Card | null,
  cardsList: Card[],
};

const initialState: PostState = {
  selectedPost: null,
  cardsList: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
  loadData: (state, action) => {
    state.cardsList = action.payload.map((card:Card) => {
        return {
...card,
likeStatus: null,
saved: false,
        }
    })
}
},
});

export const { setSelectedPost, loadData } = postsSlice.actions;

export default postsSlice.reducer;

export const PostsSelectors = {
    getSelectedPost: (state: any) => state.posts.selectedPost,
    getCards: (state:any, filters:any) =>{
        const cards = state.post.cardsList
        switch (filters) {
            case 'like':
                return cards
            case 'dislike':
                return cards
            case 'saved':
                return cards
            case 'all':
            default: 
            return cards
    
    }
    }
};