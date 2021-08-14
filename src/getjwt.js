/** @format */

const getJwt = () => {
	return localStorage.getItem("access_token");
};

export default getJwt;
