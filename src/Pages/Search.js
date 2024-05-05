import { Card } from '../Components'
import { useFetch } from '../hooks/useFetch'
import { useSearchParams } from 'react-router-dom'
export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get("q")
  const {eachMovie: Movies} = useFetch(apiPath,queryTerm)
    return (
    <main >
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'>
          {Movies.length===0 ?` No record found ${queryTerm}` : `Results for ${queryTerm}` }
        </p>
      </section>
      <section className='py-7'>
        <di className="flex flex-wrap justify-start">
          {Movies.map((fetchedmovies)=> (
            <Card key= {fetchedmovies.id} Movies={fetchedmovies}/>
          ))
          } 
        </di>
      </section>
    </main>
  )
}
