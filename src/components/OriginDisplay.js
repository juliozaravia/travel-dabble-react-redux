import React, { useEffect } from "react";
import { connect } from "react-redux";

import travelerImage from '../resources/images/traveler.png';
import originDefaultFlag from '../resources/images/default-flag-1.png';

import { fetchOriginData } from "../actions";

const OriginContainer = ({ fetchOriginData, originData }) => {
	useEffect(() => {
		fetchOriginData();
	}, []);

	return (
		<div>
			<h1 className="title">👋 Welcome!</h1>
			<div className="info">You're connecting from:</div>
			<div className="info">
				<div className="info__flag">
					<img
						src={originData.flag === 'noFlag' ? originDefaultFlag : originData.flag}
						alt="Default flag"
						className="origin-flag"
					/>
				</div><div className="info__data">
					<div className="info__item info__item--country">
						<span className="origin-country">{originData.country}</span>
					</div>
					<div className="info__item info__item--city">
						<span className="origin-city">{originData.city}</span>
					</div>
					<div className="info__item info__item--accuracy">
						<span className="origin-accuracy">{originData.confidence}</span>
					</div>
				</div>
			</div>
			<img src={travelerImage} alt="TravelDabble" className="picture" />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		originData: state.origin.originData
	};
}

const mapDispatchToProps = { fetchOriginData };

export default connect(mapStateToProps, mapDispatchToProps)(OriginContainer);