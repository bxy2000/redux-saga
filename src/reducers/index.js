import {ADD_TODO} from "../actions";
import {RENDER_TODO_LIST} from "../actions";

const initState = {
    toDoList: []
};

export default function toDoApp(state = initState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    action.toDoItem
                ]
            };
        case RENDER_TODO_LIST:
            return {
                ...state,
                toDoList: action.toDoList
            };
        default:
            return state;
    }
}
