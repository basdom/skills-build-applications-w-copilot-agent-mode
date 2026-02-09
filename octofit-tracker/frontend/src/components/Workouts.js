import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching Workouts from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setWorkouts(results);
        console.log('Fetched Workouts:', data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching workouts:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading workouts...</div>;

  return ( 
    <div className="my-4"> 
      <h2 className="mb-3 text-primary">Workouts</h2> 
      <div className="card shadow-sm mb-3"> 
        <div className="card-body"> 
          <table className="table table-striped table-hover"> 
            <thead className="table-primary"> 
              <tr> 
                <th>Name</th> 
                <th>Sets</th> 
                <th>Reps</th> 
              </tr> 
            </thead> 
            <tbody> 
              {workouts.map((workout) => ( 
                <tr key={workout.id}> 
                  <td>{workout.name}</td> 
                  <td>{workout.sets}</td> 
                  <td>{workout.reps}</td> 
                </tr> 
              ))} 
            </tbody> 
          </table> 
          <button className="btn btn-primary mt-2">Add Workout</button> 
        </div> 
      </div> 
    </div> 
  ); 
}

export default Workouts;
