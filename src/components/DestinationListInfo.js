import React from 'react';

import DestinationInfoItem from './DestinationInfoItem';

const DestinationListInfo = ({ population, language, callingCode }) => {
	return (
		<div>
			<DestinationInfoItem
				name={'Population'}
				emoji={'👨‍👩‍👦'}
				data={population}
				personalizedClass={'destination-population'}
			/>
			<DestinationInfoItem
				name={'Language'}
				emoji={'🗣'}
				data={language}
				personalizedClass={'destination-language'}
			/>
			<DestinationInfoItem
				name={'Calling Code'}
				emoji={'📞'}
				data={callingCode}
				personalizedClass={'destination-calling-code'}
			/>
		</div>
	);
};

export default DestinationListInfo;