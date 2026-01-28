import InnerBanner from '@clientComponents/Banners/InnerBanner';
import StoreContent from '@clientComponents/Shop/StoreContent';

export default function Shop() {
	return (
		<main className="bg-body">
			<InnerBanner heading="Shop" />
			<StoreContent />
		</main>
	);
}