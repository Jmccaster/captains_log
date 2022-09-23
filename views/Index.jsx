const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    console.log(logs);
    return (
      <div>
        <link rel="stylesheet" href="/css/app.css" />
        <h1>Captain's Logs List:</h1>
        <nav>
          <a href="/logs/new">Create a New Log</a>
        </nav>
        <ul>
          {logs.map((log, i) => {
            return (
              <li key={i}>
                <a href={`/logs/${log.id}`}>{log.title}</a>
                <br />

                <button>
                  <a href={`/logs/${log._id}/edit`}>Edit Log</a>
                </button>

                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="Delete" />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
