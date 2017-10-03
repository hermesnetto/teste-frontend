import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { loadShotsList } from '../redux/actions';

const mapStateToProps = state => ({
  shots: state.shots,
});

const mapDispatchToProps = dispatch => ({
  loadShotsList: () => dispatch(loadShotsList()),
});

class ShotsList extends Component {
  componentDidMount() {
    // this.props.loadShotsList();
    this.props.dispatch(loadShotsList());
  }
  render() {
    const cards = this.props.shots.map((card, index) => (
      <div className="card-list__item" key={index}>
        <Card
          id={card.id}
          thumb={card.images.normal}
          views={card.views_count}
          likes={card.likes_count}
          name={card.title}
        />
      </div>
    ));

    return(
      <div className="card-list">
        {cards}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ShotsList);