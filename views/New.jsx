const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <form action="/logs" method="POST ">
          <input type="text" name="title" />
          <input type="textarea" name="entry" />
          <input type="checkbox" name="shipIsBroken" />
          <input type="submit" value="Create Log" />
        </form>
      </div>
    );
  }
}
