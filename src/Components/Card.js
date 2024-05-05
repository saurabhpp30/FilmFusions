import {Link} from 'react-router-dom'
export const Card = ({Movies}) => {
  const {id,original_title,poster_path} = Movies
  const image = `https://image.tmdb.org/t/p/w500/${poster_path}`
  return (
    <section>
      <div className=" m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="/movies/:id">
          <img className="rounded-t-lg" src={image} alt="" />
        </Link>
        <div className="p-5">
          <Link to="/movies/:id">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </div>
    </section>
  )
}

