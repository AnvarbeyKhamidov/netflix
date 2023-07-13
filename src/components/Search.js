import React, {useState} from 'react';

function Search(props) {
    const [search,Setsearch] = useState('');

    const changeHandler = (event) => {
        Setsearch(
            [event.target.name] = event.target.value
        )
    };

    const handleKey = (e) => {
      if (e.key === "Enter"){
          props.searchMovie(search)
      }
    };

    const handleBtn = () => {
      props.searchMovie(search)
    };

    return (
        <>
            <div className="container">
                <div className="input-field col s12">
                    <input
                        type="search"
                        className="validate"
                        name={search}
                        onChange={changeHandler}
                        onKeyDown={handleKey}
                    />

                    <a onClick={handleBtn} className="waves-effect waves-light btn">Search</a>
                </div>
            </div>
        </>
    );
}

export default Search;