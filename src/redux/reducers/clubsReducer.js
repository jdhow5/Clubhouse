import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function clubsReducer(state = initialState.clubs, action) {
    switch (action.type) {
        case types.CREATE_CLUBS_SUCCESS:
            return [...state, { ...action.clubs }];
        case types.UPDATE_CLUBS_SUCCESS:
            return state.map(clubs =>
                clubs.id === action.clubs.id ? action.clubs : clubs
            );
        case types.LOAD_CLUBS_SUCCESS:
            return action.clubs;
        case types.DELETE_CLUBS_OPTIMISTIC:
            return state.filter(clubs => clubs.id !== action.clubs.id);
        default:
            return state;
    }
}