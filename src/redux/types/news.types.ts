import moment from "moment"

export const GET_STORY_ITEM = "GET_STORY_ITEM"
export const GET_USER = "GET_USER"

export interface UserInterface { //NOTE determine user in the story ,rappresented as 'by: Author id'
    id: string|number
    author_karma_score:number|string
}

export interface StoriesItemInterface { //NOTE determine types of story items
    id:number|string
    title: string
    url: string
    time: moment.Moment
    score: number
    by:number|string //NOTE Author as 'by: Author id' -->See JSON file on API ENDPOINT 'https://hacker-news.firebaseio.com/v0/item/${id}.json' 
}

interface GetStoryItemAction {
    type: typeof GET_STORY_ITEM,
    payload:StoriesItemInterface
}
interface GetUserAction {
    type: typeof GET_USER,
    payload:UserInterface
}

export type TopStoriesActionTypes = GetStoryItemAction | GetUserAction;