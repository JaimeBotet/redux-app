import { useDispatch } from 'react-redux';
import { actionCreateNote } from '../redux/actions'

export default function NewNote() {
	const dispatch = useDispatch()
	const addNote = async (event) => {
		event.preventDefault()

		const {target} = event;
		const content = target.note.value
		target.note.value = ''
		dispatch(actionCreateNote(content))
	}

	return (
		<form onSubmit={addNote}>
			<input name='note' />
			<button type='submit'>Add</button>
		</form>
	)
}