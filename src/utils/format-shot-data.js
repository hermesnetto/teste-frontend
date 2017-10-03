import formatDate from './format-date';

export default shot => ({
	id: shot.id,
  title: shot.title,
  likes_count: shot.likes_count,
  views_count: shot.views_count,
  created_at: formatDate(shot.created_at),
  description: shot.description,
  user: {
    name: shot.user.name,
    avatar_url: shot.user.avatar_url,
  },
  images: {
    normal: shot.images.normal,
    hidpi: shot.images.hidpi,
    teaser: shot.images.teaser,
  },
});