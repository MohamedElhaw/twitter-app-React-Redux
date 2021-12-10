//Define Action types variables
export const LOAD_USERS='LOAD_USERS';

//Action creators functions
export const loadUsersData =users=>{
    return{
        type:LOAD_USERS,
        users
    }
}