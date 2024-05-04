import { Button, Container, Menu } from "semantic-ui-react";

interface Props {
	openForm: () => void;
}

const Navbar = ({ openForm }: Props) => {
	return (
		<>
			<Menu inverted fixed="top">
				<Container>
					<Menu.Item header>
						<img src="/assets/logo.png" alt="logo" />
						Reactivities
					</Menu.Item>

					<Menu.Item name="Activities"></Menu.Item>

					<Menu.Item name="Activities">
						<Button onClick={openForm} positive content="Create Activities" />
					</Menu.Item>
				</Container>
			</Menu>
		</>
	);
};

export default Navbar;
