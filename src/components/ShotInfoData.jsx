import React from 'react';
import heart from '../icons/heart.svg';
import eye from '../icons/eye.svg';
import './shot-info.css';

export default function ShotInfoData(props) {
	const {
		title,
		likes_count,
		views_count,
		created_at,
		description
	} = props.info;

	const {
		name,
		avatar_url
	} = props.info.user;
	
	const {
		normal,
		hidpi
	} = props.info.images;

	return (
		<section className={`shot show-${props.state}`}>
			<header className="shot__header">
				<img className="shot__author-img" src={avatar_url} alt={name} />
				<div>
					<h1 className="shot__author-name">{title}</h1>
					<span className="shot__author-info">
						por <b>{name}</b> em {created_at}
					</span>
				</div>
			</header>
			<div className="shot__row">
				<div className="shot__content">
					<div>
						<img 
							className="shot__img is-large" 
							src={hidpi} 
							alt={title} 
							onClick={props.hideLargeImage} />
						<img 
							className="shot__img is-medium" 
							src={normal} 
							alt={title} 
							onClick={props.showLargeImage} />
					</div>
					{/* <ul>
						<li>
							<img src="" alt=""/>
						</li>
						<li>
							<img src="" alt=""/>
						</li>
					</ul> */}
					<p className="shot__desc" dangerouslySetInnerHTML={{__html: description}}></p>
				</div>
				<aside className="shot__sidebar">
					<ul className="list">
						<li className="list__item">
							<span className="list__name">
								<img className="list__icon" src={heart} alt="Likes" /> Likes
							</span>
							<span className="list__desc">{likes_count} likes</span>
						</li>
						<li className="list__item">
							<span className="list__name">
								<img className="list__icon" src={eye} alt="Visualizações" /> Visualizações
							</span>
							<span className="list__desc">{views_count} views</span>
						</li>
					</ul>
				</aside>
			</div>
		</section>
	);
}