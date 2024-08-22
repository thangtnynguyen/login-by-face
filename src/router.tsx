import { createBrowserRouter } from "react-router-dom";
import ScrollToTop from "./utilities/scroll-to-top";
import AppLayout from "./layouts/app-layout";
import LoginGuard from "./guards/login.guard";
import ErrorPage from "./components/shared/errors/500";
import Login from "./components/feartures/auth/login";
import Register from "./components/feartures/auth/register";
import { EVERY_THING_PATH } from "./urls";
import Infomation from "./components/feartures/components/infomation";


const routers = createBrowserRouter([
	//common
	{
		path: "auth",
		element:(
			<>
			{""}
			<AppLayout>
			</AppLayout>
			</>
		),
		children:[
			{
				path: "/auth/login",
				element:(
					<Login></Login>
				)
			},
			{
				path: "/auth/register",
				element:(
					<Register></Register>
				)
			}
		]	
	},
	{
		path: "",
		element: (
			<>
				{" "}
				<ScrollToTop />
				<LoginGuard>
					<AppLayout />
				</LoginGuard>
			</>
		),
		errorElement: (
			<ErrorPage />
		),
		children: [
			{
				path: "",
				element: <Infomation />

			}
		],
	},
	{
		path: EVERY_THING_PATH,
		element: <Infomation />
	},

]);

export default routers;
