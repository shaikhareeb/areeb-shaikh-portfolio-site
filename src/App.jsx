import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router";
import About from "./pages/About";
import Photography from "./pages/Photography";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

const App = () => {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/about" exact component={About} />
				<Route path="/photography" exact component={Photography} />
				<Route path="/experience" exact component={Experience} />
				<Route path="/projects" exact component={Projects} />
			</Switch>
		</>
	);
};

export default App;
