const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setActivities(results);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading activities...</div>;

  return (
    <div className="my-4">
      <h2 className="mb-3 text-primary">Activities</h2>
      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Duration (min)</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, idx) => (
                <tr key={activity.id || idx}>
                  <td>{activity.name || '-'}</td>
                  <td>{activity.duration || '-'}</td>
                  <td>{activity.calories || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary mt-2">Add Activity</button>
        </div>
      </div>
    </div>
  );
}

export default Activities;
