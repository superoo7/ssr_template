import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import { fetchUsers } from "../actions";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    if (this.props.users.length === 0) return undefined;
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Users</title>
        </Helmet>
        <div>
          <h1>List of Users</h1>
          {this.renderUsers() ? <ul>{this.renderUsers()}</ul> : undefined}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

const loadData = store => {
  return store.dispatch(fetchUsers());
};

export { loadData };
export default connect(
  mapStateToProps,
  { fetchUsers },
)(UsersList);
