import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
	const router = useRouter();
	const { pageParam } = router.query;

	console.log(router.pathname);
	console.log(router.query);

	// send a request to some backend server
	// to fetch the piece of data with an id of router.query.projectid

	return (
		<div>
			<h1>The Portfolio Project Page for {pageParam}</h1>
		</div>
	);
};

export default PortfolioProjectPage;
