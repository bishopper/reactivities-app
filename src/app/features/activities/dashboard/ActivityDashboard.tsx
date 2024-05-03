import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import ActivityList from "./ActivityList";

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
			</Grid>
		</>
	);
};

export default ActivityDashboard;
