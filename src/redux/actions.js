import { getAll, createNewNote, toggleImportanceOf } from "../services/notes"

export const actionCreateNote = (content) =>  {
	return async (dispatch) => {
		const newNote = await createNewNote(content)

		dispatch({
			type: '@notes/created',
			payload: newNote
		})
	}
}

export const actionToggleImportanceOf = (id) =>  {
	return async (dispatch) => {
		toggleImportanceOf(id)

		dispatch({
			type: '@notes/toggle_important',
			payload: {id}
		})
	}
}

export const actionFilterChange = (filter) => {
	return {
		type: '@filter/set_filter',
		filter
	}
}

export const actionInitNotes = () => {
	return async (dispatch) => {
		const notes = await getAll()

		dispatch({
			type: '@notes/init',
			payload: notes
		})
	}
}