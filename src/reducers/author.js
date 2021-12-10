import {SET_AUTHOR} from '../actions/author'

export default function author(state=null, action){
    switch (action.type){
        case SET_AUTHOR:
            return action.id;
        default:
            return state;
    }
}