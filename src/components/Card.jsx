import React from 'react';
import heart from '../icons/heart.svg';
import eye from '../icons/eye.svg';
import './card.css';

export default function Card({ thumb, views, likes, name, id }) {
  return(
    <div className="card">
      <a className="card__anchor" href={id} title="Visualizar este shot">
        <figure className="card__img">
          <img src={thumb} alt="" />
          <figcaption className="card__name">
            {name}
          </figcaption>
        </figure>
        <div className="card__body">
          <ul className="card__tools">
            <li className="card__tools__item">
              <span className="tool" title="Visualizações deste shot">
                <img className="tool__icon" src={eye} alt="Visualizações" /> {views}
              </span>
            </li>
            <li className="card__tools__item">
              <span className="tool" title="Fans deste shot">
                <img className="tool__icon  tool__icon--fans" src={heart} alt="Fans" /> {likes}
              </span>
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
}