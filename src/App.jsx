import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Routes from "./routes";

export default () => {
	return (
		<Router>
			<Routes />
		</Router>
	);
};
