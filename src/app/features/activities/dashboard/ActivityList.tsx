import {
	ItemHeader,
	Segment,
	ItemContent,
	ItemMeta,
	ItemDescription,
	ItemExtra,
	Button,
	Label,
	Item,
} from "semantic-ui-react";
import { Activity } from "../../../models/activity";

interface Props {
	activities: Activity[];
}

const ActivityList = ({ activities }: Props) => {
	return (
		<>
			<Segment>
				<Item.Group divided>
					{activities.map((activity) => (
						<Item key={activity.id}>
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
						</Item>
					))}
				</Item.Group>
			</Segment>
		</>
	);
};

export default ActivityList;
