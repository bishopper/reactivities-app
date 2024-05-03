import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Header } from "semantic-ui-react";

function App() {
	const [activities, SetActivities] = useState([]);

	useEffect(() => {
		axios.get("https://localhost:7263/api/activities").then((response) => {
			console.log(response);
			SetActivities(response.data);
		});
	}, []);

	return (
		<>
			<Header as="h2" icon="users" content="reactivites App" />

			<ul>
				{activities.map((activity: any) => (
					<li key={activity.id}>{activity.title}</li>
				))}
			</ul>
		</>
	);
}

export default App;
