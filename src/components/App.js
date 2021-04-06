import React from 'react';
import '../resources/styles/reset.css'
import '../resources/styles/main.css'
import '../resources/styles/media.css'

import OriginDisplay from './OriginDisplay';
import DestinationDisplay from './DestinationDisplay';
import StatusInfo from './StatusInfo';

const App = () => {
	return (
		<main className="main">
			<section className="origin">
				<OriginDisplay />
			</section><section className="destination">
				<DestinationDisplay />
			</section>
			<StatusInfo />
		</main>
	);
};

export default App;