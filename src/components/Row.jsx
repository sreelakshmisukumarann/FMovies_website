import React, { useEffect, useState } from 'react';
import instance from '../instance';
import './Row.css';

function Row({ title, fetchURL, isPoster }) {
  const [allMovies, setAllMovies] = useState();
  const base_url = 'https://image.tmdb.org/t/p/original/';

  const fetchData = async () => {
    const { data } = await instance.get(fetchURL);
    setAllMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='row'>
        <h1>{title}</h1>
        <div className='movie_row'>
          {allMovies?.slice(0, 8).map((item, index) => (
            <div key={index} className='movie_item'>
              <p className='movie_title'>{item?.title || item?.name}</p>
              <img
                className={`movies ${isPoster && 'movie_poster'}`}
                src={`${base_url}${isPoster ? item?.poster_path : item?.backdrop_path}`}
                alt='no image'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Row;
