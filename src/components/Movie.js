import React from 'react';

function Movie(props) {

    const{Title,Year,imdbID,Type,Poster} = props;
    return (
        <>
           <div className="card">
               <div className="card-image">
                   <img src={Poster} alt="Error"/>
                   
                   <span className="card-title">{Title}</span>
               </div>
               
               <div className="card-content">
                   <p>{Year}</p>
               </div>
               
               <div className="card-action">
                   <a href="#">{Type}</a>
               </div>
           </div>
        </>
    );
}

export default Movie;