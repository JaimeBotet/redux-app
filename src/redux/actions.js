const generateId = () => Math.floor(Math.random() * 999999999) + 1

export const createNote = (content) =>  {
	return {
		type: '@notes/created',
		payload: {
			content,
			inportant: false,
			id: generateId()
		}
	}
}

export const toggleImportanceOf = (id) =>  {
	return {
		type: '@notes/toggle_important',
		payload: {id}
	}
}

export const filterChange = (filter) => {
	return {
		type: '@filter/set_filter',
		filter
	}
}

export const initNotes = (notes) => {
	return {
		type: '@notes/init',
		payload: notes
	}
}