import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	loadShot,
	showLargeImage,
	hideLargeImage
} from '../redux/actions';
import ShotInfoData from '../components/ShotInfoData';
import ShotInfoEmpty from '../components/ShotInfoEmpty';

const mapStateToProps = state => ({
	shot: state.shot,
	typeImage: state.typeImage,
});

class ShotInfo extends Component {
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

		return <ShotInfoEmpty />
	}
}

export default connect(mapStateToProps)(ShotInfo);