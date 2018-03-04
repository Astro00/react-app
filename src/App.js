import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
import './mock';
import $ from 'jquery';

class App extends Component {
	test(){
		$.ajax({
			type: "get",
			dataType: 'json',
			url: "/rest/user",
			success: function (data) {
				console.log(data.name)
			}
		})
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" onClick={this.test} />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
        		</p>
				<ul role="nav">
					<li><Link to="/children1">children1</Link></li>
					<li><Link to="/children2">children2</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}

export default App;
