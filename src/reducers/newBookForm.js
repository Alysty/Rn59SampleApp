import SET_FIELD from '../actions'

const INITIAL_STATE ={
    volumeInfo:{
        title:'',
        authors: [],
        description:'',
        imageLinks:'https://i.imgur.com/uuKFEGW.png'
    }

}
export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case SET_FIELD:
            const clonedState = {...state};
            clonedState.action.field = action.value;
            return clonedState;
        default:
            return{}
    }
}