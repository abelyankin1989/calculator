import {actionTypes} from '../actions/action'

const defaultState = {
    display_value: 0,
};

export default (state = defaultState, action) => {
    switch (action.type){
        case actionTypes.change_display_value:
            return {
                ...state,
                display_value: action.display_value
            }
        case actionTypes.set_operator:
            return{
                ...state,
                display_operator: action.display_operator
            }
        default: 
            return state;
}
}
