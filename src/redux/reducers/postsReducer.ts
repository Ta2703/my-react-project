import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    setPosts: (state, action: PayloadAction<Card[]>) => {
      state.cardsList = action.payload.map((card: Card) => {
        return {
          ...card,
          likeStatus: null,
          saved: false,
        };
      });
    },
    loadData: (state, action) => {},    

loadPost: (state, action) => {},
setPost: (state, action: PayloadAction<Card>) => {
  state.selectedPost = action.payload;
},
  },
});


export const {
  loadData,
  loadPost,
  setPosts,
  setPost,
} = postsSlice.actions;

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