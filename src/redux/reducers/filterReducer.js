
export const filterReducer = (state = 'ALL', action) => {

	switch(action.type){
		case '@filter/set_filter': 
			return action.filter
		default:
			return state
	}
}