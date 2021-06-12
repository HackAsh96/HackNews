import axios from 'axios'

const getTopStories = async () => {
    try {
        return axios({
            url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
            method: 'GET'
        });
    } catch (error) {
        return console.error(error);
    }
}
const getStoryItem = async (id: number | string) => {
    try {
        return axios({
            url: `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
            method: 'GET'
        });
    } catch (error) {
        return console.error(error);
    }
}
const getUser = async (id: number | string) => {
    try {
        return axios({
            url: `https://hacker-news.firebaseio.com/v0/user/${id}.json`,
            method: 'GET'
        });
    } catch (error) {
        return console.error(error);
    }
}

export {getTopStories,getStoryItem,getUser}