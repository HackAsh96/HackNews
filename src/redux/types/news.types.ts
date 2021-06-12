import moment from "moment"

export const GET_TOP_STORIES = "GET_TOP_STORIES"
export const GET_STORY_ITEM = "GET_STORY_ITEM"
export const GET_USER = "GET_USER"

export interface UserInterface {
    id: string
    karma:number|string
}

export interface StoryItemInterface {
    id:number|string
    title: string
    url: string
    timestamp: moment.Moment
    story_score: number | string
    user:UserInterface
}

interface GetTopStoriesAction {
    type: typeof GET_TOP_STORIES,
    payload: number[]
}
interface GetStoryItemAction {
    type: typeof GET_STORY_ITEM,
    payload:StoryItemInterface
}
interface GetUserAction {
    type: typeof GET_USER,
    payload:UserInterface
}

export type TopStoriesActionTypes = GetTopStoriesAction|GetStoryItemAction|GetUserAction