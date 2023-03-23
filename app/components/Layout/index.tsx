import { Outlet } from "@remix-run/react";
import Footer from "./Footer";
import Header from "./Header";

export default () => {
	return (
		<>
			<Header />
			<main className="grow flex flex-col p-8 lg:px-16 lg:py-10 xl:px-20 xl:py-10 gap-8 lg:gap-10">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
