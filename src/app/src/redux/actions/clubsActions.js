import * as types from "./actionTypes";
import * as clubsApi from "../../api/clubsApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadClubsSuccess(clubs) {
    return { type: types.LOAD_CLUBS_SUCCESS, clubs };
}

export function createClubsSuccess(clubs) {
    return { type: types.CREATE_CLUBS_SUCCESS, clubs };
}

export function updateClubsSuccess(clubs) {
    return { type: types.UPDATE_CLUBS_SUCCESS, clubs };
}

export function deleteClubsOptimistic(clubs) {
    return { type: types.DELETE_CLUBS_OPTIMISTIC, clubs };
}

export function loadClubs() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return clubsApi
            .getClubs()
            .then(clubs => {
                dispatch(loadClubsSuccess(clubs));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}

// export function saveClubs(clubs) {
//     //eslint-disable-next-line no-unused-vars
//     return function (dispatch, getState) {
//         dispatch(beginApiCall());
//         return clubsApi
//             .saveClubs(clubs)
//             .then(savedClubs => {
//                 clubs.id
//                     ? dispatch(updateCourseSuccess(savedClubs))
//                     : dispatch(createCourseSuccess(savedClubs));
//             })
//             .catch(error => {
//                 dispatch(apiCallError(error));
//                 throw error;
//             });
//     };
// }

// export function deleteCourse(clubs) {
//     return function (dispatch) {
//         // Doing optimistic delete, so not dispatching begin/end api call
//         // actions, or apiCallError action since we're not showing the loading status for this.
//         dispatch(deleteCourseOptimistic(clubs));
//         return clubsApi.deleteCourse(clubs.id);
//     };
// }
