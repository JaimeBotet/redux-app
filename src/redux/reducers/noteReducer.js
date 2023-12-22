const iniState = [
	{
		content: 'welcome to miduclass',
		important: true,
		id: 1
	}, {
		content: "Thanks for assisting to the class",
		important: false,
		id: 2
	}
]

export const noteReducer = (state = iniState , action) => {
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
		default:
			return state
	}
}