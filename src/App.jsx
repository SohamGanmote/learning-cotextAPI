import React from "react";
import Component from "./Component";
import { ThemeProvider } from "./ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<Component />
		</ThemeProvider>
	);
}

export default App;
