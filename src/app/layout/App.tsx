import { useEffect, useState } from "react";
import "./Styles.css";
import axios from "axios";
import { Header } from "semantic-ui-react";
import { Activity } from "../models/activity";
import Navbar from "./Navbar";

function App() {
	const [activities, SetActivities] = useState<Activity[]>([]);

	useEffect(() => {
		axios.get("https://localhost:7263/api/activities").then((response) => {
			console.log(response);
			SetActivities(response.data);
		});
	}, []);

	return (
		<>
			<Navbar />
		</>
	);
}

export default App;
