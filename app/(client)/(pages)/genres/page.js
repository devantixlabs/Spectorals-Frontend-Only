import ComicBrowser from '@clientComponents/Genres/ComicBrowser';
import GenreSelector from '@clientComponents/Genres/GenreSelector';

export default function Genres() {
	return (
		<main className="pb-16">
			<GenreSelector />
			<ComicBrowser />
		</main>
	);
}