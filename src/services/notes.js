import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

export const getAll = async () => {
	const res = await axios.get(baseUrl)
	return res.data // notes
}

export const createNewNote = async (content) => {
	const note = { content, important: false }
	const response = await axios.post(baseUrl, note)

	return response.data
}

export const toggleImportanceOf = async (id) => {
	const noteToChange = await axios.get(baseUrl).then(res => res.data.find( note => note.id === id))
	const response = await axios.patch(baseUrl + '/' + id, {important: !noteToChange.important})

	return response.data
}