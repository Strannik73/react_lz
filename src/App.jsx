import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FavBut } from './FavBut'
import { Modal } from './components/ui/Modal'
import { useTheme } from './hooks/useTheme'

export function MovieCard({ id, image, rating, mp4 }) {
  const [isOpenTrailer, setIsOpenTrailer] = useState(false)
  const navigate = useNavigate()
  const { theme } = useTheme()

  const cardBg = theme === 'dark' ? 'bg-neutral-900' : 'bg-white'
  const cardText = theme === 'dark' ? 'text-white' : 'text-black'

  return (
    <button
      onClick={() => navigate(`/movie/${id}`)}
      className={`relative w-[250px] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform will-change-transform duration-300 ${cardBg} ${cardText}`}
    >
      {isOpenTrailer && (
        <Modal onClose={() => setIsOpenTrailer(false)}>
          <div className="w-[77vw] max-w-4xl h-[35vh]">
            <video
              src={mp4}
              controls
              muted
              autoPlay
              className="w-full h-full object-contain"
              onError={(e) => console.log('VIDEO ERROR', e)}
            />
          </div>
        </Modal>
      )}

      <img src={image} alt="Movie Poster" className="w-full h-auto object-cover" />

      <div className="absolute top-2 right-2 z-10 px-1 py-1 flex items-center gap-1">
        <FavBut />
        <button
          className="btn"
          onClick={(e) => {
            e.stopPropagation() // чтобы не сработал navigate при клике на трейлер
            setIsOpenTrailer(true)
          }}
        >
          ▶
        </button>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-sm font-semibold">
        Рейтинг: {rating}
      </div>
    </button>
  )
}
