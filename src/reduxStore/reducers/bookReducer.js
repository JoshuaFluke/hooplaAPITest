import initialState from '../initialState'

function bookReducer(state = initialState.bookData, action){

    switch(action.type){
        case 'ADDBOOKS':
            let newState = state;

            newState = newState.concat(action.data);
            return newState;

        default:
            return state;
    }

}

export default bookReducer

