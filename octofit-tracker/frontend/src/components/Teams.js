const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setTeams(results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading teams...</div>;

  return (
    <div className="my-4">
      <h2 className="mb-3 text-primary">Teams</h2>
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, idx) => (
                <tr key={team.id || idx}>
                  <td>{team.name || '-'}</td>
                  <td>{team.members || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success mt-2">Create Team</button>
        </div>
      </div>
    </div>
  );
}

export default Teams;
