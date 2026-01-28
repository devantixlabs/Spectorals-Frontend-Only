import { extraLargeNovel } from '@/app/common/mocks';

import Novel from '@clientComponents/NovelReader/Novel/Novel';
import { NovelReaderProvider } from '@clientComponents/NovelReader/NovelReaderContext';

const page = () => {
	return (
		<NovelReaderProvider>
			<Novel novel={extraLargeNovel} />
		</NovelReaderProvider>
	);
};

export default page;