import { useEffect, useState } from "react";
import "./Styles.css";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import Navbar from "./Navbar";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";

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
			<Container style={{ marginTop: "7em" }}>
				<ActivityDashboard activities={activities} />
			</Container>
		</>
	);
}

export default App;
