const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" required />
          <br />
          Entry:
          <input type="textarea" name="entry" required />
          <br />
          Is the ship broken?:
          <input type="checkbox" name="shipIsBroken" />
          <br />
          <input type="submit" value="Create Log" /> <br />
        </form>
      </div>
    );
  }
}

module.exports = New;
