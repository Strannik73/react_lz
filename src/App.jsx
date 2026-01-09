import { useState } from 'react'
import { MovieCard } from './MovieCard'
import { MOVIES } from './movies'
import { useDebounce } from './hooks/useDeb'
import { useTheme } from './hooks/useTheme'

function App() {
  const {theme, toggleTheme} = useTheme()

  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 600)

  const movies = MOVIES.filter(movie => movie.name.toLowerCase().includes(debouncedSearch.toLowerCase()))
  
  return (
    <div className='min-h-screen w-full bg-white dark:bg-black
    text-black dark:text-white px-20 py-5'>
      <header className='mb-10 flex items-center justify-between'>
        <img 
          src="/kino.jpg"
          width={250}
          alt='ci'
          // style={}
          className='h-24 w-25 rounded-4xl'
        />

        <div>
          <input type="search"
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value)
            }}
            placeholder="Поиск..."
            className="border border-black/15 dark:border-white/15 px-2 py-1 rounded outline-0"/>
          
          <button
            onClick={toggleTheme}
            className='text-sm px-3 py-1 rounded border border-white/20
            dark:border-white/10 hover:bg-white hover:text-black
            dark:hover:bg-white/10 transition w-20 ml-2'
          >
            {theme === 'dark' ? '☀ Light' : '☽ Dark'}
          </button>
        </div>
      </header>
      <main className="flex gap-6">
        {movies.length ? (
          movies.map(movie =>(
            <MovieCard 
              key={movie.name}
              image={movie.image} 
              rating={movie.rating}
              mp4={movie.mp4}
            /> 
          )) 
        ): (<p>Фильмы не найдены </p>)}
        
        
                 
      </main>
    </div>
  )

}

export default App