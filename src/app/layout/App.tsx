import { useEffect, useState } from "react";
import "./Styles.css";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import Navbar from "./Navbar";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";

function App() {
	// states
	const [activities, SetActivities] = useState<Activity[]>([]);
	const [selectedActivity, setSelectedActivity] = useState<
		Activity | undefined
	>(undefined);
	const [editMode, setEditMode] = useState(false);

	// fetch data
	useEffect(() => {
		axios.get("https://localhost:7263/api/activities").then((response) => {
			console.log(response);
			SetActivities(response.data);
		});
	}, []);

	// handlers
	const SelectedActivityHandler = (id: string) => {
		setSelectedActivity(activities.find((a) => a.id === id));
	};

	const CancelSelectedActivityHandler = () => {
		setSelectedActivity(undefined);
	};

	const FormOpenHandler = (id?: string) => {
		id ? SelectedActivityHandler(id) : CancelSelectedActivityHandler;
		setEditMode(true);
	};

	const FormCloseHandler = () => {
		setEditMode(false);
	};

	return (
		<>
			<Navbar openForm={FormOpenHandler} />
			<Container style={{ marginTop: "7em" }}>
				<ActivityDashboard
					activities={activities}
					selectedActivity={selectedActivity}
					selectActivity={SelectedActivityHandler}
					cancelSelectedActivity={CancelSelectedActivityHandler}
					editMode={editMode}
					openForm={FormOpenHandler}
					closeForm={FormCloseHandler}
				/>
			</Container>
		</>
	);
}

export default App;
