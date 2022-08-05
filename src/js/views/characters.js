import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Characters = () => {
  const { store, actions } = useContext(Context);

  /*  const [people, setPeople] = useState([]);
 
   const [loading, setLoading] = useState(true); */

  /*   useEffect(() => {
      async function fetchPeople() {
        let res = await fetch('https://swapi.dev/api/people/');
        let data = await res.json();
        setPeople(data.results);
  
      }
      fetchPeople();
    }, []) */

  return (
    <>
      <section>
        <div className="container">
          <h1 className="fs-5 text-center mb-4">STAR WARS CHARACTERS</h1>
          <div className="row gx-5">
            {store.people.map(({ name, birth_year, height, mass }, index) => {
              return (

                <div className="col-lg-4 mb-5" >
                  <div className="card h-100 shadow border-0">
                    <img
                      className="card-img-top"
                      src="https://dummyimage.com/600x350/ced4da/6c757d"
                      alt="..."
                    />

                    <div id="cardCh" className="card-body p-4">
                      <h5 className=" card-title mb-3">{name}</h5>

                      <p className="card-text mb-0">
                        <p>Height: {height} </p>
                        <p>Mass: {mass} </p>
                        <p>Birth: {birth_year} </p>
                      </p>
                    </div>
                    <div className="card-footer p-4 pt-0  border-top-0" id="cardCh">
                      <div className="d-flex align-items-end justify-content-between">
                        <Link className="btn btn-outline-success" to={`/charactersDetails/${index}`} >Learn more</Link>
                        <button onClick={() => actions.addFavorites(name)} className="btn btn-outline-success"><i class="fas fa-heart"></i></button>
                      </div>
                    </div>
                  </div>
                </div>

              )
            })}

          </div>
        </div>
      </section>
    </>

  );
};

