/*
 * action types
 */
export const SET_SORT_TYPE = 'SET_SORT_TYPE';
export const LOAD_DATA = 'LOAD_DATA';
/*
 * Functions that trigger actions
 */
export function setSortType(sortType, isAsc) {
    return {type: SET_SORT_TYPE, sortType, isAsc};
}
export function loadData() {
    return {type: LOAD_DATA};
}