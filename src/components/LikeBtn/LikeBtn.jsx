import React from 'react';

function LikeBtn({ onClick, isSavedMovie }) {
  return (
    <button type="button" className={!isSavedMovie ? 'movie__like' : 'movie__like movie__like_active'} onClick={onClick} aria-label="Лайк" />
  );
}

export default LikeBtn;
