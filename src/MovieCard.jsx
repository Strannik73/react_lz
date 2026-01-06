import { useState } from 'react'
import { FavBut } from './FavBut'
import { Modal } from './components/ui/Modal'


export function MovieCard({ image, rating, mp4 }) {
    const [isOpenTrailer, setIsOpenTrailer] = useState(false)

    return (
        <div
            className="relative w-[250px] rounded-2xl overflow-hidden
            bg-neutral-900 shadow-lg hover:scale-105 transition-transform
            will-change-transform duration-300"
        >
            {isOpenTrailer && (
                <Modal onClose={() => setIsOpenTrailer(false)}>
                    <div className="w-[77vw] max-w-4xl h-[35vh]">
                        <video
                            src={mp4}
                            controls
                            muted
                            autoPlay
                            style={{ width: 600 }}
                            onError={(e) => console.log('VIDEO ERROR', e)}
                        />
                    </div>
                </Modal>
            )}

            <img
                src={image}
                alt="Movie Poster"
                className="w-full h-auto object-cover"
            />

            <div className="absolute top-2 right-2 z-10 px-1 py-1 flex items-center gap-1">
                <FavBut />
                <button
                    className="btn"
                    onClick={() => setIsOpenTrailer(true)}
                >
                    ▶
                </button>
            </div>

            <div
                className="absolute bottom-0 left-0 w-full
                bg-gradient-to-t from-black/80 to-transparent p-2 text-sm
                text-white font-semibold"
            >
                Рейтинг: {rating}
            </div>
        </div>
    )
}