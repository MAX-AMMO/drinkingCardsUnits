const initialState = {
}
export default (state = initialState, action) => {
 switch (action.type) {
  case 'selectTr':
  	// console.log("reducer action:", action);
  	// console.log(action.payload)
   return {
    ...state,
    selectedTr: action.payload
   }
  default:
   return state
 }
}