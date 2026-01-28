import InnerBanner from '@clientComponents/Banners/InnerBanner';
import ProductDetail from '@clientComponents/Shop/ProductDetail';
import RelatedProducts from '@clientComponents/Shop/RelatedProducts';

export default function Shop() {
	return (
		<main>
			<InnerBanner heading="Product Details" />
			<ProductDetail />
			<RelatedProducts />
		</main>
	);
}