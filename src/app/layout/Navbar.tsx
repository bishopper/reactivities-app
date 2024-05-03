import { Button, Container, Menu } from "semantic-ui-react";

const Navbar = () => {
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
						<Button positive content="Create Activities" />
					</Menu.Item>
				</Container>
			</Menu>
		</>
	);
};

export default Navbar;
