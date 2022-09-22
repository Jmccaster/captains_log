const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    console.log(logs);
    return (
      <div>
        <h1>Captain's Logs List:</h1>
        <nav>
          <a href="/logs/new">Create a New Log</a>
        </nav>
        <ul>
          {logs.map((log, i) => {
            return <li key={i}>{log.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
