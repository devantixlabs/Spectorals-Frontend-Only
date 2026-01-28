import FollowingSection from '@clientComponents/Favorites/FollowingSection';
import ReadingSection from "@clientComponents/Favorites/ReadingSection";
import SavedComics from "@clientComponents/Favorites/SavedComics";





export default function Favorites() {
  return (
    <main>
      <SavedComics />
      <ReadingSection />
      <FollowingSection />
    </main>
  );
}