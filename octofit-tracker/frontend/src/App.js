import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App bg-light min-vh-100">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">OctoFit Tracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#activities">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#teams">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#leaderboard">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#workouts">Workouts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#users">Users</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h1 className="card-title display-5 mb-3 text-primary">Welcome to OctoFit Tracker</h1>
                <p className="card-text lead">Track your fitness, join teams, and compete on the leaderboard!</p>
                {/* Main content and routed components would go here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
