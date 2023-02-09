import './App.css';

import {
  useEffect,
  useState,
} from 'react';

import Discussions from './Discussions';
import Form from './Form';
import Header from './Header';

function App() {
  const [discussionData, setDiscussionData] = useState([]);
	useEffect(() => {
		fetch('http://localhost:4000/discussions')
    	.then(res => res.json())
		.then((result) => {
			setDiscussionData(result);
		})
	}, []);
	const handleSubmitClick = (newSingleData) => {
		setDiscussionData([newSingleData, ...discussionData]);
	};
	return (
		<main>
			<div className='splash-screen'>My Agora States</div>
			<Header />
			<Form handleSubmitClick={handleSubmitClick} />
			<Discussions discussionData={discussionData} />
		</main>
	);
};

export default App;