import { useDispatch } from 'react-redux';
import NewNote from './components/NewNote';
import Notes from './components/Notes'
import { filterChange } from './redux/actions';

const App = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<NewNote />
			<div>
				all
				<input type='radio' name='filter' onChange={() => dispatch(filterChange('ALL'))} />

				important
				<input type='radio' name='filter' onChange={() => dispatch(filterChange('IMPORTANT'))} />

				not important
				<input type='radio' name='filter' onChange={() => dispatch(filterChange('NO_IMPORTANT'))} />
			</div>
			<Notes />
		</div>
  	);
}

export default App;