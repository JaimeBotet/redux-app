import { useDispatch } from 'react-redux';
import NewNote from './components/NewNote';
import Notes from './components/Notes'
import { useEffect } from 'react';
import { actionInitNotes, actionFilterChange } from './redux/actions';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(actionInitNotes())
	}, [dispatch])

	return (
		<div>
			<NewNote />
			<div>
				all
				<input type='radio' name='filter' onChange={() => dispatch(actionFilterChange('ALL'))} />

				important
				<input type='radio' name='filter' onChange={() => dispatch(actionFilterChange('IMPORTANT'))} />

				not important
				<input type='radio' name='filter' onChange={() => dispatch(actionFilterChange('NO_IMPORTANT'))} />
			</div>
			<Notes />
		</div>
  	);
}

export default App;