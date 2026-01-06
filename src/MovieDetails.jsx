import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { MOVIES } from './movies'
import { Modal } from './components/ui/Modal'
import { useTheme } from './hooks/useTheme'

export function MovieDetails() {
  const [isOpenTrailer, setIsOpenTrailer] = useState(false)
  const { id } = useParams()
  const { theme } = useTheme()

  const movie = useMemo(() => MOVIES.find(m => m.id === id), [id])

  if (!movie) return <p className="text-center mt-10 text-gray-400">Фильм не найден</p>


  const pageBg = theme === 'dark' ? 'bg-black' : 'bg-white'
  const pageText = theme === 'dark' ? 'text-white' : 'text-black'
  const cardBg = theme === 'dark' ? 'bg-neutral-900' : 'bg-white'

  return (
    <div className={`min-h-screen px-6 py-10 ${pageBg} ${pageText}`}>
      <div className={`relative rounded-2xl p-6 shadow-lg ${cardBg}`}>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <img
            src={movie.image}
            alt="Movie Poster"
            className="w-2/3 md:w-1/3 rounded-xl shadow-lg object-cover"
          />

          <div className="flex-1 space-y-4">
            <h1 className="text-4xl font-bold">{movie.name}</h1>
            <p className="text-sm text-gray-500">Рейтинг: {movie.rating}</p>
            <p className="text-sm">{movie.ko}</p>
          </div>
        </div>

        <div className="absolute top-2 right-2 z-10 px-1 py-1 flex items-center gap-1">
          <button
            className="btn"
            onClick={(e) => {
              e.stopPropagation()
              setIsOpenTrailer(true)
            }}
          >
            ▶
          </button>
        </div>
      </div>

      {isOpenTrailer && (
        <Modal onClose={() => setIsOpenTrailer(false)}>
          <div className="w-[77vw] max-w-4xl h-[35vh]">
            <video
              src={movie.mp4}
              controls
              muted
              autoPlay
              className="w-full h-full object-contain"
              onError={(e) => console.log('VIDEO ERROR', e)}
            />
          </div>
        </Modal>
      )}
    </div>
  )
}
