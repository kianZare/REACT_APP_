import React from "react";
import { useEffect, useState } from "react";
// import MovieCard from "./components/MovieCars";
import CreateUser from "./components/CreateUser";
import ReadUsers from "./components/readUsers";
import Login from "./components/login";
import { getCookie } from "./common";
import { authCheck } from "./utils";
import  UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser";
import "./App.css"

// const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=fedc68d3"


const App = () => {
  // const [searchTerm, setSearchTerm] = useState("")
  // const [movies, setMovies] = useState([])

  const [user, setUser] = useState()

  useEffect(()=>{
    // searchFilms('Batman')
    let cookie = getCookie('jwt_token')
    if (cookie !== false) {
      loginWithToken(cookie)
    }
    
  }, [])

  const loginWithToken = async (cookie) => {
    const user = await authCheck(cookie)
    setUser(user)
  }

  // const searchFilms = async (title) => {
  //   const request = await fetch(`${API_URL}&s=${title}`)
  //   const response = await request.json()
  //   setMovies(response.Search)
  //   // console.log(response.Search)
  // }

  return (
    // <div className="app">
    //   <h1>My Movie App</h1>
    //   <br></br>
    //   <br></br>

    //   <div className='searchInput'>
    //     <input 
    //       placeholder='Search for a film'
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //     <button 
    //     onClick={() => searchFilms(searchTerm)}>
    //     Search for a film
    //     </button>
    //   </div>

    //   {movies?.length > 0
    //   //if the movies array is greater than zero
    //     ? (
    //       <div className="container">
    //         {/* map over movies array and display each movie in the movies array in our moiveCard componet */}
    //         {movies.map((oneMovie) =>(
    //           <MovieCard movie={oneMovie} />
    //         ))}
    //       </div>
    //       //else the movies array is less than zero display no movies found
    //     ) : (
    //       <div className='empty'>
    //         <h2>No movies found</h2>
    //       </div>
    //     )
    //   }      
    // </div>

    <div className='app'>
      <div className="signup">
        <h2>Sign Up</h2>
        <CreateUser />
      </div>

      <div className="signin">
        <h2>Sign In</h2>
        <Login setter={setUser}/>
      </div>
      <div className="login">
      {user ?
        <>
            <h2> Hello welcome {user} you have logged in</h2>
            <br/>
            <UpdateUser user={user} />
            <br/>
            <DeleteUser user={user} />
            <br/>
            <h2>signed up users</h2>
            <ReadUsers/>
        </>
          :
          <h2>Please login</h2>
      }
      </div>
        <br/>      
    </div>
  )

}

export default App;