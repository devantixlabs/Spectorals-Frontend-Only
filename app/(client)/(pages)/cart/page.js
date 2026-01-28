import InnerBanner from '@clientComponents/Banners/InnerBanner';
import Checkout from '@clientComponents/Cart/Checkout';

export default function News() {
	return (
		<main>
			<InnerBanner heading="Cart" />
			<Checkout />
		</main>
	);
}