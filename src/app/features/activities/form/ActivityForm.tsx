import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import { ChangeEvent, useState } from "react";

interface Props {
	selectedActivity: Activity | undefined;
	closeForm: () => void;
	CreateOrEditActivity: (activity: Activity) => void;
}

const ActivityForm = ({
	selectedActivity,
	closeForm,
	CreateOrEditActivity,
}: Props) => {
	const initialState = selectedActivity ?? {
		id: "",
		title: "",
		category: "",
		description: "",
		date: "",
		city: "",
		venue: "",
	};

	const [activity, setActivity] = useState(initialState);

	const FormSubmitHandler = () => {
		console.log(activity);
		CreateOrEditActivity(activity);
	};

	const InputChangeHandler = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;
		setActivity({
			...activity,
			[name]: value,
		});
	};

	return (
		<>
			<Segment clearing>
				<Form onSubmit={FormSubmitHandler} autoComplete="off">
					<Form.Input
						placeholder="Title"
						name="title"
						value={activity.title}
						onChange={InputChangeHandler}
					/>
					<Form.TextArea
						placeholder="Description"
						name="description"
						value={activity.description}
						onChange={InputChangeHandler}
					/>
					<Form.Input
						placeholder="Category"
						name="category"
						value={activity.category}
						onChange={InputChangeHandler}
					/>
					<Form.Input
						placeholder="Date"
						name="date"
						value={activity.date}
						onChange={InputChangeHandler}
					/>
					<Form.Input
						placeholder="City"
						name="city"
						value={activity.city}
						onChange={InputChangeHandler}
					/>
					<Form.Input
						placeholder="Venue"
						name="venue"
						value={activity.venue}
						onChange={InputChangeHandler}
					/>
					<Button floated="right" positive type="submit" content="Submit" />
					<Button
						floated="right"
						positive
						type="button"
						content="Cancel"
						onClick={closeForm}
					/>
				</Form>
			</Segment>
		</>
	);
};

export default ActivityForm;
