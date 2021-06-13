import {GET_STORY_ITEM, GET_USER, TopStoriesActionTypes,StoriesItemInterface,UserInterface } from '../types';

interface NewsState{
  storiesItem: StoriesItemInterface[]
  users:UserInterface[]
}

const initialState:NewsState = {
  storiesItem: [],
  users: []
};

export default function reducer(state = initialState, action: TopStoriesActionTypes):NewsState {
  switch (action.type) {
    case GET_STORY_ITEM:
      const storiesArray = state.storiesItem.slice(0)
      storiesArray.push(action.payload)
      return Object.assign({}, state, {
        storiesItem:storiesArray
      })
    case GET_USER:
      const usersArray=state.users.slice(0)
        usersArray.push(action.payload)
      return Object.assign({}, state, {
        users:usersArray
      })
    default:
      return state
  }
};