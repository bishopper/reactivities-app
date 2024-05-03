import {
	ItemGroup,
	ItemHeader,
	Segment,
	ItemContent,
	ItemMeta,
	ItemDescription,
	ItemExtra,
	Button,
	Label,
} from "semantic-ui-react";
import { Activity } from "../../../models/activity";

interface Props {
	activities: Activity[];
}

const ActivityList = ({ activities }: Props) => {
	return (
		<>
			<Segment>
				<ItemGroup>
					{activities.map((activity) => (
						<ItemContent>
							<ItemHeader as="a">{activity.title}</ItemHeader>
							<ItemMeta>{activity.date}</ItemMeta>
							<ItemDescription>
								<div>{activity.description}</div>
								<div>
									{activity.city} , {activity.venue}
								</div>
							</ItemDescription>
							<ItemExtra>
								<Button floated="right" content="View" color="blue" />
								<Label basic content={activity.category} />
							</ItemExtra>
						</ItemContent>
					))}
				</ItemGroup>
			</Segment>
		</>
	);
};

export default ActivityList;
