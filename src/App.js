/** @format */

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { DrawerProvider } from "./Context/DrawerContext";
import { LinkProvider } from "./Context/LinkContext";

import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import Auth from "./Auth";

const bgColor = "#0B090A";
const lightDark = "#161A1D";
const red = "#E5383B";

const theme = createMuiTheme({
	palette: {
		common: {
			bgColor: bgColor,
			lightDark: lightDark,
			red: red,
		},
		primary: {
			main: red,
		},
	},
	typography: {
		h1: {
			fontWeight: 800,
			fontSize: "3.3rem",
			lineHeight: "62px",
			fontFamily: "Poppins",
		},
		h2: {
			fontSize: "1.5rem",
			fontWeight: 600,
			fontFamily: "Poppins",
			color: "#ffffff",
		},
		h5: {
			fontWeight: 600,
			fontFamily: "Poppins",
		},
		h6: {
			fontWeight: 400,
			fontFamily: "Poppins",
			color: "#ffffff",
		},
		subtitle1: {
			fontSize: "1rem",
			fontWeight: 300,
			color: "#ffffff",
			fontStyle: "italic",
			fontFamily: "Poppins",
		},
		body1: {
			color: "#ffffff",
			fontFamily: "Poppins",
			textTransform: "capitalize",
			fontSize: "1rem",
			fontWeight: 600,
		},
		body2: {
			fontFamily: "Poppins",
			fontSize: "1rem",
			fontWeight: 300,
			opacity: 0.7,
			color: "#ffffff",
		},
	},
});

function App(props) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<DrawerProvider>
				<LinkProvider>
					<BrowserRouter>
						<Switch>
							<Route
								exact
								path="/"
								render={(props) =>
									loading ? (
										<ScaleLoader color={red} height={100} width={10} />
									) : (
										<Home {...props} />
									)
								}
							/>
							<Route
								exact
								path="/about"
								render={(props) =>
									loading ? (
										<ScaleLoader color={red} height={100} width={10} />
									) : (
										<About {...props} />
									)
								}
							/>
							<Route
								exact
								path="/portfolio"
								render={(props) =>
									loading ? (
										<ScaleLoader color={red} height={100} width={10} />
									) : (
										<Portfolio {...props} />
									)
								}
							/>
							<Route
								exact
								path="/contact"
								render={(props) =>
									loading ? (
										<ScaleLoader color={red} height={100} width={10} />
									) : (
										<Contact {...props} />
									)
								}
							/>
							<Route
								exact
								path="/dashboard"
								render={(props) =>
									loading ? (
										<ScaleLoader color={red} height={100} width={10} />
									) : (
										<Auth>
											<Dashboard {...props} />
										</Auth>
									)
								}
							/>
							<Route
								exact
								path="/signinflashtheadmin"
								render={(props) =>
									loading ? (
										<ScaleLoader color={red} height={100} width={10} />
									) : (
										<Signin {...props} />
									)
								}
							/>
						</Switch>
					</BrowserRouter>
				</LinkProvider>
			</DrawerProvider>
		</ThemeProvider>
	);
}

export default App;
