import { MovieCard } from './MovieCard'

function App() {
  return (
    <div className='min-h-screen w-full bg-black text-white px-6 py-5'>
      <header className='mb-10 flex items-center'>
        <img 
          src="/cin.jpg"
          width={250}
          alt='ci'
          // style={}
          className='h-24 w-25'
        />
      </header>
      <main className="flex gap-6">
        <MovieCard 
          image='/rambo.jpg' 
          rating={7.9}
          />        
      </main>
    </div>
  )
}

export default App
