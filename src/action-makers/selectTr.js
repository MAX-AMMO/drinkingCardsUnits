export const selectTr = (trId) => dispatch => {
 dispatch({
  type: 'selectTr',
  payload: trId
 })
}