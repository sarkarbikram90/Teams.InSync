import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"

class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div className="container2">
				<div style={{fontSize: "14px", background: "white", width: "10%", textAlign: "right", margin: "auto", marginBottom: "10px"}}>
					Source Code: 
					<IconButton style={{color: "black"}} onClick={() => window.open("https://github.com/sarkarbikram90/Teams.InSync", "_blank")}>
						<GitHubIcon />
					</IconButton>
				</div>
				
				<div>
					<h1 style={{ fontSize: "45px" }}>InSync</h1>
					<p style={{ fontWeight: "200" }}>InSync - is a browser based collaboration and communication application that lets you stay in touch with all your friends and team</p>
				</div>

				<div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
					<Input placeholder="URL" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Join</Button>
				</div>
			</div>
		)
	}
}

export default Home;