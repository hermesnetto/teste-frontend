import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	loadShot,
	showLargeImage,
	hideLargeImage,
	clearShot
} from '../redux/actions';
import ShotInfoData from '../components/ShotInfoData';

const mapStateToProps = state => ({
	shot: state.shot,
	typeImage: state.typeImage,
});

class ShotInfo extends Component {
	componentWillMount() {
		this.props.dispatch(clearShot());
	}
	componentDidMount() {
		this.props.dispatch(loadShot(this.props.match.params.id));
	}
	showLargeImage() {
		this.props.dispatch(showLargeImage());
	}
	hideLargeImage() {
		this.props.dispatch(hideLargeImage());
	}
	render() {
		const { shot, typeImage } = this.props;

		if (shot !== undefined && Object.keys(shot).length) {
			return (
				<div>
					<ShotInfoData 
						info={shot} 
						state={typeImage}
						showLargeImage={() => this.showLargeImage()} 
						hideLargeImage={() => this.hideLargeImage()} />
				</div>
			)
		}

		return <div></div>;
	}
}

export default connect(mapStateToProps)(ShotInfo);