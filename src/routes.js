import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
export default function () {
	return (
		<Switch>
			<Route path="/" exact>
				<Dashboard />
			</Route>
		</Switch>
	);
}
