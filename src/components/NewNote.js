import { useDispatch } from 'react-redux';
import { createNote } from '../redux/actions'

export default function NewNote() {
	const dispatch = useDispatch()
	const addNote = (event) => {
		event.preventDefault()

		const {target} = event;
		const content = target.note.value
		target.note.value = ''
		dispatch(createNote(content))
	}

	return (
		<form onSubmit={addNote}>
			<input name='note' />
			<button type='submit'>Add</button>
		</form>
	)
}