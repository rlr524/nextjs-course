import Link from "next/link";

const NotFoundPage = () => {
	return (
		<div>
			<h1>Page Not Found!</h1>
			<h3>
				<Link href={"/"}>Return Home</Link>
			</h3>
		</div>
	);
};

export default NotFoundPage;
