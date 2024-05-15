import { useTheme, useThemeUpdate } from "./ThemeContext";

const Component = () => {
	const darkTheme = useTheme();
	const updateTheme = useThemeUpdate();

	const themeStyles = {
		backgroundColor: darkTheme ? "#333" : "#CCC",
		color: darkTheme ? "#CCC" : "#333",
		padding: "2rem",
		margin: "2rem",
		paddingTop: "1rem",
	};

	return (
		<div style={themeStyles}>
			<h3>Theme Component</h3>
			<button onClick={updateTheme}>Toggle Theme</button>
		</div>
	);
};
export default Component;
