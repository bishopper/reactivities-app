import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
	activities: Activity[];
}

const ActivityDashboard = ({ activities }: Props) => {
	return (
		<>
			<Grid>
				<Grid.Column width="10">
					<List>
						<ActivityList activities={activities} />
						{activities.map((activity) => (
							<List.Item key={activity.id}>{activity.title}</List.Item>
						))}
					</List>
				</Grid.Column>
				<Grid.Column width="6">
					{activities[0] && <ActivityDetails activity={activities[0]} />}
					<ActivityForm />
				</Grid.Column>
			</Grid>
		</>
	);
};

export default ActivityDashboard;
