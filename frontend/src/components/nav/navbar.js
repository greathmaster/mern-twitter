import React from "react";
import { Link } from "react-router-dom";
// import "./navbar.css";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

const mapStateToProps = state => ({
	loggedIn: state.session.isAuthenticated,
});

function mapDispatchToProps(dispatch) {
	return {
		logout: () => dispatch(logout()),
	}
}

// src/components/nav/navbar.js

export default connect(mapStateToProps, mapDispatchToProps)(
	class NavBar extends React.Component {
		constructor(props) {
			super(props);
			this.logoutUser = this.logoutUser.bind(this);
			this.getLinks = this.getLinks.bind(this);
		}

		logoutUser(e) {
			e.preventDefault();
			this.props.logout();
		}

		// Selectively render links dependent on whether the user is logged in
		getLinks() {
			if (this.props.loggedIn) {
				return (
					<div>
						<Link to={"/tweets"}>All Tweets</Link>
						<Link to={"/profile"}>Profile</Link>
						<Link to={"/new_tweet"}>Write a Tweet</Link>
						<button onClick={this.logoutUser}>Logout</button>
					</div>
				);
			} else {
				return (
					<div>
						<Link to={"/signup"}>Signup</Link>
						<Link to={"/login"}>Login</Link>
					</div>
				);
			}
		}

		render() {
			return (
				<div>
					<h1>Chirper</h1>
					{this.getLinks()}
				</div>
			);
		}
	}
);
