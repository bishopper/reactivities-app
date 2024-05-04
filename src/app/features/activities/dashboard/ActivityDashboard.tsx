import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
	activities: Activity[];
	selectedActivity: Activity | undefined;
	selectActivity: (id: string) => void;
	cancelSelectedActivity: () => void;
	editMode: boolean;
	openForm: (id?: string) => void;
	closeForm: () => void;
}

const ActivityDashboard = ({
	activities,
	selectedActivity,
	selectActivity,
	cancelSelectedActivity,
	editMode,
	openForm,
	closeForm,
}: Props) => {
	return (
		<>
			<Grid>
				<Grid.Column width="10">
					<List>
						<ActivityList
							activities={activities}
							selectActivity={selectActivity}
						/>
						{activities.map((activity) => (
							<List.Item key={activity.id}>{activity.title}</List.Item>
						))}
					</List>
				</Grid.Column>
				<Grid.Column width="6">
					{selectedActivity && !editMode && (
						<ActivityDetails
							activity={selectedActivity}
							cancelSelectedActivity={cancelSelectedActivity}
							openForm={openForm}
						/>
					)}
					{editMode && (
						<ActivityForm
							closeForm={closeForm}
							selectedActivity={selectedActivity}
						/>
					)}
				</Grid.Column>
			</Grid>
		</>
	);
};

export default ActivityDashboard;
