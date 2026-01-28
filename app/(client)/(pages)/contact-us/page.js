import ContactForm from '@clientComponents/Contact/ContactForm';
import ContactSection from '@clientComponents/Contact/ContactSection';

export default function Contact() {
	return (
		<main className="bg-body">
			<ContactSection />
			<ContactForm />
		</main>
	);
}