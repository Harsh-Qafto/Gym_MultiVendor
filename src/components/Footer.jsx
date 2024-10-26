import React from "react";

const Footer = () => {
	return (
		<footer class="bg-white">
			<div class="mx-auto max-w-screen-xl px-4 sm:px-6 py-16">
				<div class="lg:flex lg:items-start lg:gap-4">
					<div className="flex flex-shrink-0 items-center">
						<img
							alt="logo"
							src="../assets/logo.png"
							className="h-8 w-auto bg-orange-600 rounded-full px-2 py-2.5"
						/>
					</div>

					<div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
						<div class="col-span-2">
							<div>
								<h2 class="text-2xl font-bold text-gray-900">
									Get the latest news!
								</h2>

								<p class="mt-4 text-gray-500">
									Subscribe to our newsletter to stay updated
									on the latest news, exclusive offers, and
									upcoming events. Be the first to know about
									new features and special promotions
									delivered straight to your inbox!
								</p>
							</div>
						</div>

						<div class="col-span-2 lg:col-span-3 lg:flex lg:items-center">
							<form class="w-full">
								<label for="UserEmail" class="sr-only">
									Email
								</label>

								<div class="border border-gray-300 rounded p-2 sm:flex sm:items-center sm:gap-4">
									<input
										type="email"
										id="UserEmail"
										placeholder="john@rhcp.com"
										class="w-full border-none focus:border-transparent focus:ring-transparent focus:outline-gray-400 sm:text-sm py-2.5 px-2"
									/>

									<button class="mt-1 w-full rounded bg-orange-600 px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-orange-700 sm:mt-0 sm:w-auto sm:shrink-0">
										Subscribe
									</button>
								</div>
							</form>
						</div>

						<div class="col-span-2 sm:col-span-1">
							<p class="font-medium text-gray-900">Services</p>

							<ul class="mt-6 space-y-4 text-sm">
								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										1on1 Coaching
									</a>
								</li>

								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										Browse Gyms
									</a>
								</li>

								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										Health Calculator
									</a>
								</li>

								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										Trainers
									</a>
								</li>

								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										Courses
									</a>
								</li>
							</ul>
						</div>

						<div class="col-span-2 sm:col-span-1">
							<p class="font-medium text-gray-900">Company</p>

							<ul class="mt-6 space-y-4 text-sm">
								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										About
									</a>
								</li>

								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										Meet the Team
									</a>
								</li>

								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										Reviews
									</a>
								</li>
                                <li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										Become a Partner
									</a>
								</li>
							</ul>
						</div>

						<div class="col-span-2 sm:col-span-1">
							<p class="font-medium text-gray-900">
								Helpful Links
							</p>

							<ul class="mt-6 space-y-4 text-sm">
								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										Contact
									</a>
								</li>

								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										FAQs
									</a>
								</li>

								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										Blogs
									</a>
								</li>
							</ul>
						</div>

						<div class="col-span-2 sm:col-span-1">
							<p class="font-medium text-gray-900">Legal</p>

							<ul class="mt-6 space-y-4 text-sm">
								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										Returns Policy
									</a>
								</li>

								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										Refund Policy
									</a>
								</li>

								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										Terms & Conditions
									</a>
								</li>
							</ul>
						</div>

						<div class="col-span-2 sm:col-span-1">
							<p class="font-medium text-gray-900">Downloads</p>

							<ul class="mt-6 space-y-4 text-sm">
								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										Marketing Calendar
									</a>
								</li>

								<li>
									<a
										href="#"
										class="text-gray-700 transition hover:text-orange-700"
									>
										SEO Infographics
									</a>
								</li>
							</ul>
						</div>

						<ul class="col-span-2 flex flex-wrap justify-start lg:justify-center gap-6 lg:col-span-5">
							<li>
								<a
									href="#"
									rel="noreferrer"
									target="_blank"
									class="text-gray-700 transition hover:text-orange-700"
								>
									<span class="sr-only">Facebook</span>

									<svg
										class="size-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
											clip-rule="evenodd"
										/>
									</svg>
								</a>
							</li>

							<li>
								<a
									href="#"
									rel="noreferrer"
									target="_blank"
									class="text-gray-700 transition hover:text-orange-700"
								>
									<span class="sr-only">Instagram</span>

									<svg
										class="size-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
											clip-rule="evenodd"
										/>
									</svg>
								</a>
							</li>

							<li>
								<a
									href="#"
									rel="noreferrer"
									target="_blank"
									class="text-gray-700 transition hover:text-orange-700"
								>
									<span class="sr-only">Twitter</span>

									<svg
										class="size-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</a>
							</li>

							<li>
								<a
									href="#"
									rel="noreferrer"
									target="_blank"
									class="text-gray-700 transition hover:text-orange-700"
								>
									<span class="sr-only">Youtube</span>

									<svg
										class="size-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											fill="currentColor"
											d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12ZM9 5H15C16.9194 5 18.1983 5.00275 19.1673 5.10773C20.0989 5.20866 20.504 5.38448 20.7634 5.57295C21.018 5.75799 21.242 5.98196 21.4271 6.23664C21.6155 6.49605 21.7913 6.90113 21.8923 7.83269C21.9973 8.80167 22 10.0806 22 12C22 13.9194 21.9973 15.1983 21.8923 16.1673C21.7913 17.0989 21.6155 17.504 21.4271 17.7634C21.242 18.018 21.018 18.242 20.7634 18.4271C20.504 18.6155 20.0989 18.7913 19.1673 18.8923C18.1983 18.9973 16.9194 19 15 19H9C7.08058 19 5.80167 18.9973 4.83269 18.8923C3.90113 18.7913 3.49605 18.6155 3.23664 18.4271C2.98196 18.242 2.75799 18.018 2.57295 17.7634C2.38448 17.504 2.20866 17.0989 2.10773 16.1673C2.00275 15.1983 2 13.9194 2 12C2 10.0806 2.00275 8.80167 2.10773 7.83269C2.20866 6.90113 2.38448 6.49605 2.57295 6.23664C2.75799 5.98196 2.98196 5.75799 3.23664 5.57295C3.49605 5.38448 3.90113 5.20866 4.83269 5.10773C5.80167 5.00275 7.08058 5 9 5Z"
											fill="currentColor"
										/>
									</svg>
								</a>
							</li>

							<li>
								<a
									href="#"
									rel="noreferrer"
									target="_blank"
									class="text-gray-700 transition hover:text-orange-700"
								>
									<span class="sr-only">Whatsapp</span>

									<svg
										class="size-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
											fill="currentColor"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
											fill="currentColor"
										/>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="mt-8 border-t border-gray-300 pt-8">
					<div class="sm:flex sm:justify-between">
						<p class="text-sm text-gray-500">
							&copy; 2024. Company Name. All rights reserved.
						</p>

						<ul class="mt-8 flex flex-wrap justify-start gap-4 text-sm sm:mt-0 lg:justify-end">
							<li>
								<a
									href="#"
									class="text-gray-500 transition hover:text-orange-700"
								>
									Terms & Conditions
								</a>
							</li>

							<li>
								<a
									href="#"
									class="text-gray-500 transition hover:text-orange-700"
								>
									Privacy Policy
								</a>
							</li>

							<li>
								<a
									href="#"
									class="text-gray-500 transition hover:text-orange-700"
								>
									Cookies
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
