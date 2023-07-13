import React, {useEffect, useState} from 'react';
import axios from "axios";
import Search from "../components/Search";
import Movies from "../components/Movies";
import Loader from "../components/Loader";

function Main(props) {
    const [movies,Setmovies] = useState([]);
    const [loading,Setloading] = useState(true);



    useEffect(() => {
        axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=72a6a282&s=panda")
            .then((res) => {
                console.log(res);

                Setmovies(res.data.Search);
                Setloading(false);
            })
    },[]);

    const searchMovies  = (str) => {
        Setloading(true);
      axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=72a6a282&s=${str}`)
      .then((res) => {
          console.log(res);
          Setmovies(res.data.Search);

          Setloading(false);
        })
    };

    return (
        <>
            <Search searchMovie = {searchMovies}/>
            {loading ? <Loader/> :<Movies movies={movies}/> }

        </>
    );
}

export default Main;