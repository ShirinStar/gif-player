import React from 'react';

export default (props) => {
  const { gifs } = props;
  return (
    <div className="Gif-list">
    {gifs.map(gif => (
      <div>
      <img src={gif[0].images.preview_gif.url} />
      </div>
    ))}
  </div>
)}