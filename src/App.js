import React, { Component, useEffect, useState } from "react";
import facade from "./apiFacade";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  login = evt => {
    evt.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };
  onChange = evt => {
    this.setState({ [evt.target.id]: evt.target.value });
  };
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.login} onChange={this.onChange}>
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
function LoggedIn() {
  const [data, setData] = useState({});
  const [id, setId] = useState(1);
  useEffect(() => {
    facade.fetchSpell(id).then(res => setData(res));
    //facade.fetchData().then(res => setData(res));
  }, [id]);

  function set_Id(evt) {
    const id = document.getElementById("id").value;
    setId(id);
  }

  return (
    <div>
      <h2>Data Received from server</h2>
      <div>
        <input id="id" type="text" placeholder="Search" />
        <button onClick={set_Id}> Search </button>
      </div>
      <h3>{JSON.stringify(data)}</h3>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }
  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  }; //TODO
  login = (user, pass) => {
    facade.login(user, pass).then(res => this.setState({ loggedIn: true }));
  }; //TODO
  render() {
    return (
      <div>
        {!this.state.loggedIn ? (
          <LogIn login={this.login} />
        ) : (
          <div>
            <LoggedIn />
            <button onClick={this.logout}>Logout</button>
          </div>
        )}
      </div>
    );
  }
}
export default App;
