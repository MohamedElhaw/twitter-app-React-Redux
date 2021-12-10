import {getInitialData} from '../utils/api';
import { setAuthor } from './author';
import { loadUsersData } from './users';
import {loadTweetsData} from './tweets';


//Set the authorID as a logged user
const authorId='tylermcginnis';

//Load Initial Data From API
export const loadInitialData=()=>{
    return (dispatch)=>{
        getInitialData()
        .then(({users,tweets})=>{
            dispatch(loadUsersData(users))
            dispatch(loadTweetsData(tweets))
            dispatch(setAuthor(authorId))
        })
    };
} 


