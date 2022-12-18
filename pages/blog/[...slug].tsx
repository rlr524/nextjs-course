import { useRouter } from "next/router";

const BlogPostsPage = () => {
	const router = useRouter();

	console.log(router.query);

	return (
		<div>
			<h1>The Blog Posts</h1>
			<p>Blog post is {router.query.slug}</p>
		</div>
	);
};

export default BlogPostsPage;
