import Header from "../Components/Header"
import MovieList from "../Components/MovieList"

const HomePage = () => {
  
  return (
    <div className="h-full flex flex-col gap-10">
        <Header />
        <MovieList />

    </div>
  )
}

export default HomePage