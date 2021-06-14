import moment from 'moment';
import { NavigationScreenProp, NavigationParams, NavigationState } from 'react-navigation';

export type NavigationPropsConfiguration = NavigationScreenProp<NavigationState, NavigationParams>

//NOTE Function that will shuffle entire the array 'Fisher-Yates Shuffle' --> https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
export const randomizeNews = (array:number[]) => { 
    let currentIndex = array.length;
    let randomIndex:number;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
export const convertDateFormat = (date:number) => {
    return moment.unix(date).format('DD MMM YYYY')
}