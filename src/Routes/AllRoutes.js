import { Routes, Route} from "react-router-dom"
import { MovieDetail,Movielist,Search,PageNotFound } from "../Pages"
 export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
         <Route path ="/" element = {<Movielist apiPath = "movie/now_playing"/>} />
         <Route path ="/movies/:id" element = {<MovieDetail/>} />
         <Route path ="/movies/top" element = {<Movielist apiPath = "movie/top_rated" />} />
         <Route path ="/movies/popular" element = {<Movielist apiPath = "movie/popular" />} />
         <Route path ="/movies/upcoming" element = {<Movielist apiPath = "movie/upcoming"/>} />
         <Route path ="/search" element = {<Search apiPath="search/movie"/>} />
         <Route path ="*" element = {<PageNotFound/>} />
      </Routes>
    </div>
  )
}
