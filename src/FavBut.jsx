import { useState } from "react"

export function FavBut() {
    const [isFav, setIsFav] = useState(false)

    return <button onClick={() => setIsFav(!isFav)}>
        {isFav ? 'nftn' : 'btbt'}
    </button>
}