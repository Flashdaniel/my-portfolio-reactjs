/** @format */

import React, { useEffect } from "react";
import axiosInstance from "./Axios";
import { useHistory } from "react-router-dom";

export default function SignUp() {
	const history = useHistory();

	useEffect(() => {
		localStorage.removeItem("access_token");
		localStorage.removeItem("refresh_token");
		axiosInstance.defaults.headers["Autorization"] = null;
		history.push("/signinflashtheadmin");
	});
	return <div>Logout</div>;
}
