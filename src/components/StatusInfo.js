import React from 'react';
import { connect } from 'react-redux';

const StatusInfo = ({ errorState }) => {
	let statusClassName = 'status';
	if (errorState === 'noErrors') {
		statusClassName += ' status--ok';
	} else {
		statusClassName += ' status--error';
	}

	return (
		<div className={statusClassName}>
			{errorState === 'noErrors' ? 'STATUS <OK> All services working' : 'STATUS <ERROR> ' + errorState}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		errorState: state.errors.errorState
	};
};
export default connect(mapStateToProps)(StatusInfo);