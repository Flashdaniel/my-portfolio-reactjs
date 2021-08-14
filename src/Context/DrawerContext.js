/** @format */

import React, { useState, createContext } from "react";

export const DrawerContext = createContext();

export function DrawerProvider(props) {
	const [open, setOpen] = useState(false);

	return (
		<DrawerContext.Provider value={[open, setOpen]}>
			{props.children}
		</DrawerContext.Provider>
	);
}
