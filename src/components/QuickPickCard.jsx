import songs from "../data/songs"

const QuickPickCard = () =>{


  return(
    <div>
          <div className="lg:flex gap-2 hidden">

            {
                songs.map((song) => (
                    <div className="flex w-68 h-12 bg-mist-300/30 " key={song.id}>
                        <div className="w-12 max-h-full">
                            <img className="w-full h-full object-cover" src={song.image} alt={song.title} />
                        </div>
                        <div>
                            <h1 className="text-xs font-bold text-white mt-3.5 ml-2.5">{song.title}</h1>
                        </div>
                    </div>
                ))
            }

          </div>
    </div>
  )
}
export default QuickPickCard;