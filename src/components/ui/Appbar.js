/** @format */

import React, { useContext } from "react";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { DrawerContext } from "../../Context/DrawerContext";

const useStyle = makeStyles((theme) => ({
	appbar: {
		zIndex: 1600,
		height: "65px",
		paddingLeft: "5px",
	},
	title: {
		fontFamily: "Poppins",
		fontWeight: 700,
		flexGrow: 1,
		fontSize: 30,
	},
	menu: {
		width: 40,
		height: 40,
	},
}));

export default function Appbar({ title }) {
	const classes = useStyle();
	const theme = useTheme();
	const [open, setOpen] = useContext(DrawerContext);

	return (
		<Hidden smUp>
			<AppBar
				position="fixed"
				className={classes.appbar}
				style={{ backgroundColor: open && theme.palette.common.lightDark }}
			>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h5" className={classes.title}>
						{title}
					</Typography>
					<IconButton
						edge="end"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						disableRipple
					>
						{open ? (
							<CloseIcon
								className={classes.menu}
								onClick={() => setOpen(false)}
							/>
						) : (
							<MenuIcon
								className={classes.menu}
								onClick={() => setOpen(true)}
							/>
						)}
					</IconButton>
				</Toolbar>
			</AppBar>
		</Hidden>
	);
}
