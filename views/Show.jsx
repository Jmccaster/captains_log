const React = require("react");

class Show extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.log.title}</h1>
        <h3>{this.props.log.entry}</h3>
        <h3>
          {this.props.log.shipIsBroken
            ? "Our ship is broken. Uh oh!"
            : "Our is not broken. We are good!"}
        </h3>
        <br />
        <a href="/logs">So back to logs</a>
      </div>
    );
  }
}

module.exports = Show;
