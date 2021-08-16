/** @format */

import React, { useEffect } from "react";
import axiosInstance from "./Axios";
import { useHistory } from "react-router-dom";

export default function SignUp() {
	const history = useHistory();

	useEffect(() => {
		const response = axiosInstance.post("account/logout/blacklist/", {
			refresh_token: localStorage.getItem("refresh_token"),
		});
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		axiosInstance.defaults.headers["Autorization"] = null;
		history.push("/signinflashtheadmin");
	});
	return <div>Logout</div>;
}
