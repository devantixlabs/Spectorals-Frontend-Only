import InnerBanner from '@clientComponents/Banners/InnerBanner';
import NewsDetail from '@clientComponents/News/NewsDetail';
import RelatedBlogs from '@clientComponents/News/RelatedBlogs';

export default async function SingleNews({ params }) {
	const { newsId } = await params;

	return (
		<main>
			<InnerBanner heading="News and Featured Article" />
			<NewsDetail articleId={newsId} />
			<RelatedBlogs />
		</main>
	);
}