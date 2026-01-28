export default function ContactSection() {
	return (
		<section className="bg-body">
			<div className="spectoral_con lg:pt-[150px]">
				<div className="mx-auto text-center">
					<h2 className="mb-8 text-4xl font-bold text-primary md:text-[64px]">
						Contact Us
					</h2>

					<p className="mx-auto mb-12 max-w-3xl text-lg text-white md:text-base">
						Please fill out the form, or send us an email to
						support@spectorals.com, and we'll get back to you as soon as
						possible.
					</p>

					<div className="mx-auto mb-[150px] max-w-xl rounded-[10px] border border-white p-8 py-14 md:rounded-[40px]">
						<div className="mb-1 text-base font-extralight text-white">
							Email Us
						</div>
						<div className="text-lg font-medium text-white md:text-2xl">
							support@spectorals.com
						</div>
					</div>

					<div className="max-w-full border-t border-[#5F606A]"></div>
				</div>
			</div>
		</section>
	);
}
