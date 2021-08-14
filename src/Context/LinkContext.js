/** @format */

import React, { createContext, useState } from "react";

export const LinkContext = createContext();

export function LinkProvider(props) {
	const [selectedNav, setSelectedNav] = useState(0);

	return (
		<LinkContext.Provider value={[selectedNav, setSelectedNav]}>
			{props.children}
		</LinkContext.Provider>
	);
}
