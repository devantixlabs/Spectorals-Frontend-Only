import ComicReader from '@/app/(client)/components/ComicReader/ComicReader';
import { ComicReaderProvider } from "@/app/(client)/components/ComicReader/ComicReaderContetx";
import { comics } from "@/app/common/mocks";


const page = async ({params}) => {
	const { comicId } = await params;
	const comic = comics.find((item) => item.id == comicId);

	return (
		<ComicReaderProvider>
			<ComicReader currentComic={comic} />
		</ComicReaderProvider>
	)
};

export default page;