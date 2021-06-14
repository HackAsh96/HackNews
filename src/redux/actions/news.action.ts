import {GET_STORY_ITEM,GET_USER, TopStoriesActionTypes,StoriesItemInterface,UserInterface } from '../types';
import { ActionCreator } from 'redux';
import {getAllTopStories, getStoryItemById, getUserById} from '../../services/_hackNews.service'
import { randomizeNews } from '../../helper.config';

const getStoryItem:ActionCreator<TopStoriesActionTypes> = (item: StoriesItemInterface ) => {
  return { type: GET_STORY_ITEM, payload: item };
}
const getUser: ActionCreator<TopStoriesActionTypes> = (user: UserInterface) => {
  return { type: GET_USER, payload: user };
}

export const getLimitedTopStories = ():any => {
  return (dispatch: any) => {
    try {
      return getAllTopStories().then((response: any) => {
         //NOTE Since the array contains IDs of top stories, and these will be shuffled everytime, there is no need to store them in a reducer. Cause we will not use them anywhere else.
        const shuffeledArray = randomizeNews(response.data)
        const limitedTopStories=shuffeledArray.slice(0,10)
        limitedTopStories.forEach((id: number) => {
          getStoryItemById(id) //Single Story
            .then((responseStory: any) => {
            const { id, title, url, time, by, score } = responseStory.data
            //NOTE Mapping the response's keys of the returned JSON object, using same keys on Code Assignment
              const storyItem = { id, title, url, timestamp: time, score }
              
              getUserById(by) // This function will return the user that has written the story
                .then((responseUser: any) => {
              const { id, karma } = responseUser.data
              //NOTE Mapping the response's keys of the returned JSON object, using same keys on Code Assignment
              const user = { id, author_karma_score: karma }
              dispatch(getStoryItem({...storyItem,author:user}))
              dispatch(getUser(user))
            })
          })
        })
      })

    }
    catch (error) {
      console.error(error)
    }
  }
}