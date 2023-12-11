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