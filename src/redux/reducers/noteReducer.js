
export const noteReducer = (state = [] , action) => {
	switch(action.type){
		case '@notes/created': 
			return [...state, action.payload]
		case '@notes/toggle_important':
			const {id} = action.payload
			return state.map( note => {
				if(note.id === id) {
					return {
						...note,
						important: !note.important
					}
				} 
				return note
			});
		case '@notes/init':
			return action.payload
		default:
			return state
	}
}