/** @format */

import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import AddIcon from "@material-ui/icons/Add";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

import DashboardHeader from "./components/dashboard/DashboardHeader";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		paddingTop: theme.spacing(0),
	},
}));

export default function Dashboard() {
	const classes = useStyles();
	const theme = useTheme();

	const [projectTitle, setProjectTitle] = useState("");
	const [projectName, setProjectName] = useState("");
	const [client, setClient] = useState("");
	const [language, setLanguage] = useState("");
	const [preview, setPreview] = useState("");
	const [selectedFile, setSelectedFile] = useState(null);
	const [create, setCreate] = useState(true);

	const handleProjectTitleChange = (e) => {
		setProjectTitle(e.target.value);
	};
	const handleProjectNameChange = (e) => {
		setProjectName(e.target.value);
	};
	const handleClientChange = (e) => {
		setClient(e.target.value);
	};
	const handleLanguageChange = (e) => {
		setLanguage(e.target.value);
	};
	const handlePreviewChange = (e) => {
		setPreview(e.target.value);
	};
	const handleFileChange = (e) => {
		setSelectedFile(e.target.files[0]);
		console.log(e.target.files[0].name);
	};

	const onSubmit = (e) => {
		setCreate(true);
		const formData = new FormData();

		formData.append("project heading", projectTitle);
		formData.append("project name", projectName);
		formData.append("client", client);
		formData.append("language", language);
		formData.append("preview", preview);
		formData.append("image", selectedFile);

		axios

			.post("http://localhost:8000/api/works/work_list", formData)

			.then((res) => {
				alert("File Upload success");
				setCreate(false);
			})

			.catch((err) => alert("File Upload Error"));
	};

	return (
		<div className={classes.root}>
			<DashboardHeader />
			<main className={classes.content}>
				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
					dolor purus non enim praesent elementum facilisis leo vel. Risus at
					ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
					quisque non tellus. Convallis convallis tellus id interdum velit
					laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
					adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
					integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
					eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
					quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
					vivamus at augue. At augue eget arcu dictum varius duis at consectetur
					lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
					faucibus et molestie ac.
				</Typography>
				<Typography paragraph>
					Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
					ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
					elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
					sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
					mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
					risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
					purus viverra accumsan in. In hendrerit gravida rutrum quisque non
					tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
					morbi tristique senectus et. Adipiscing elit duis tristique
					sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
					eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
					posuere sollicitudin aliquam ultrices sagittis orci a.
				</Typography>
			</main>
		</div>
	);
}
