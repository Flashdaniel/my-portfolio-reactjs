/** @format */

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import getJwt from "./getjwt";

export default function Auth(props) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const history = useHistory();

	useEffect(() => {
		const jwt = getJwt();
		if (!jwt) {
			history.push("/signinflashtheadmin");
		} else {
			setIsAuthenticated(true);
		}
	}, [history]);

	return (
		<React.Fragment>
			{isAuthenticated ? props.children : <div>Loading...</div>}
		</React.Fragment>
	);
}
