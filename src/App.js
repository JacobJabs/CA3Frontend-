import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import facade from "./apiFacade";
import Navigation from "./components/Navigation";

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
        <h1>Welcome to group2's website</h1>
        <h3>Login</h3>
        <form onSubmit={this.login} onChange={this.onChange}>
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { dataFromServer: "Fetching!" };
  }
  componentDidMount() {
    facade.fetchData().then(res => this.setState({ dataFromServer: res.msg }));
  }
  render() {
    return (
      <div>
        <h2>Data Received from server</h2>

        <div>
          <input type="text" placeholder="Search" />
          <button onClick={this.ineed}> Search </button>
        </div>

        <h3>{this.state.dataFromServer}</h3>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }
  ineed = () => {
    return fetch(URL + "/api/spells/index");
  };

  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  }; //TODO
  login = (user, pass) => {
    facade.login(user, pass).then(res => this.setState({ loggedIn: true }));
  }; //TODO
  render() {
    return (
      <Router>
        <div>
          {!this.state.loggedIn ? (
            <LogIn login={this.login} />
          ) : (
            <div>
              <LoggedIn />
              <Navigation>
                <li></li>
              </Navigation>
              <button onClick={this.logout}>Logout</button>
            </div>
          )}
        </div>
      </Router>
    );
  }
}
export default App;
