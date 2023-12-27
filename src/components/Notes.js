import { useSelector, useDispatch } from "react-redux"
import { toggleImportanceOf } from "../redux/actions" 

export default function Notes() {
	const dispatch = useDispatch()

	const notes = useSelector( state => {
		if(state.filter === 'ALL') {
			return state.notes
		} else {
			return state.filter === "IMPORTANT" 
				? state.notes.filter( note => note.important)
				: state.notes.filter( note => !note.important)
		}
	} )

	const toggleImportant = (id) => {
		dispatch(toggleImportanceOf(id))
	}

	return (
		<ul>
			{
				notes.map(note => {
					return <li key={note.id} onClick={() => toggleImportant(note.id)}>
						{note.content}
						<strong>
							{
								note.important
								? 'important'
								: 'not important'
							}
						</strong>
					</li>
				})
			}
		</ul>
	)
}