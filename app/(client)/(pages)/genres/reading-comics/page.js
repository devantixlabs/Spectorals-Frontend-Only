import ReadingComic from '@clientComponents/Comics/ReadingComic';
import RecommendedComic from '@clientComponents/Comics/RecommendedComic';
import GenreSelector from '@clientComponents/Genres/GenreSelector';

export default function ReadingComics() {
	return (
		<main className="mb-16">
			<GenreSelector />
			<ReadingComic />
			<RecommendedComic />
		</main>
	);
}