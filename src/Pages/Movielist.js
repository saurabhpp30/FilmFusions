import { Card } from '../Components'
import { useFetch } from '../hooks/useFetch'
export const Movielist = ({apiPath}) => {
    
  const {eachMovie: Movies} = useFetch(apiPath)
  return (
    <main >
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
