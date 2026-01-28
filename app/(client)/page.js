import CreatorsSection from '@clientComponents/Home/CreatorSection';
import Genres from '@clientComponents/Home/Genres';
import HeroSlider from '@clientComponents/Home/HeroSlider';
import MyList from '@clientComponents/Home/MyList';
import NewReleases from '@clientComponents/Home/NewReleases';
import RecentlyViewed from '@clientComponents/Home/RecentlyViewed';
import Suggested from '@clientComponents/Home/Suggested';
import TopNovels from '@clientComponents/Home/TopNovels';
import TopTen from '@clientComponents/Home/TopTen';





export default function Home() {
	return (
		<main className="bg-body">
			<HeroSlider />
			<CreatorsSection />
			<NewReleases />
			<TopTen />
			<TopNovels />
			<MyList />
			<RecentlyViewed />
			<Suggested />
			<Genres />
		</main>
	);
}