import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../models/activity";

interface Props {
	activity: Activity;
}

const ActivityDetails = ({ activity }: Props) => {
	return (
		<>
			<Card>
				<Image src={`/assets/categoryImages/${activity.category}.jpg`} />
				<Card.Content>
					<Card.Header>{activity.title}</Card.Header>
					<Card.Meta>
						<span>{activity.date}</span>
					</Card.Meta>
					<Card.Description>{activity.description}</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Button.Group widths="2">
						<Button basic color="blue" content="edit" />
					</Button.Group>
				</Card.Content>
			</Card>
		</>
	);
};

export default ActivityDetails;
