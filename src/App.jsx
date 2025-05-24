import React from 'react'
import Search from './components/Search.jsx'
import Spinner from './components/Spinner.jsx';
import { useState } from 'react'
import { useEffect } from 'react';
import MovieCard from "./components/MovieCard.jsx";

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY =import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`

  }
}

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const [errorMessage, setErrorMessage] = useState('')
  const [movieList, setMovieList] = useState([])
  const [isLoading, setisLoading] = useState(false)

  const fetchMovies = async () => {
    setisLoading(true);
    setErrorMessage('');

    try{
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok){
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();

      if(data.Response === 'False'){
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || [])

    } catch (error){
      console.error(`Error reaching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.')
    }finally {
      setisLoading(false);
    }
  }

  useEffect(() =>{
    fetchMovies();
  }, [])
  

  return (
    <main>
      <div className='pattern'></div>  
      
      <div className='wrapper'>
        <header>
          <img src="./public/hero-img.png" alt="Hero Image" />
          <h1> Find <span className='text-gradient'>Movies</span> You Want Bro!</h1>
        
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>

        <section className='all-movies'>
          <h2 className='mt-[40px]'>All Movies</h2>

          {isLoading ? (
            <Spinner />)
          : errorMessage? (<p className='text-red-500'>{errorMessage}</p>) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
        </main>
    
  )
}

export default App