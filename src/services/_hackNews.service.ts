import axios from 'axios'

const getAllTopStories = async () => {
    try {
        return axios({
            url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
            method: 'GET'
        })
    } catch (error) {
        return console.error(error);
    }
}
const getStoryItemById = async (id: number | string) => {
    try {
        return axios({
            url: `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
            method: 'GET'
        });
    } catch (error) {
        return console.error(error);
    }
}
const getUserById = async (id: number | string) => {
    try {
        return axios({
            url: `https://hacker-news.firebaseio.com/v0/user/${id}.json`,
            method: 'GET'
        });
    } catch (error) {
        return console.error(error);
    }
}

export {getAllTopStories,getStoryItemById,getUserById}