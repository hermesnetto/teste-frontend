import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';
import { loadShotsList, paginate } from '../redux/actions';
import loading from '../icons/loading.svg';

const mapStateToProps = state => ({
  shots: state.shots,
  page: state.page,
});

class ShotsList extends Component {
  constructor() {
    super();
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(loadShotsList(this.props.page));
    window.addEventListener('scroll', this.onScroll);
  }
  onScroll = () => {
    const { shots, isLoading, page } = this.props;

    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      shots.length
    ) {
      paginate(this.props.dispatch, page + 1);
    }
  }
  getCards() {
    const { shots } = this.props;

    return shots.map((card, index) => (
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
  }
  render() {
    return(
      <div className="card-list">
        {this.getCards()}
      </div>
    );
  }
}

export default connect(mapStateToProps)(ShotsList);