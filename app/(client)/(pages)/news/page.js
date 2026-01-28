import InnerBanner from '@clientComponents/Banners/InnerBanner';
import ArticleGrid from '@clientComponents/News/ArticleGrid';
import NewsFeatured from '@clientComponents/News/NewsFeatured';

export default function News() {
	return (
		<main>
			<InnerBanner heading="News" />
			<NewsFeatured />
			<ArticleGrid />
		</main>
	);
}