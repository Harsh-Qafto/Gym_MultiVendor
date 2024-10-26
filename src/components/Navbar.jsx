import {
	Disclosure
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
	return (
		<Disclosure as="nav" className="bg-white shadow-md">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
				<div className="flex h-10 justify-between">
					<div className="flex">
						<div className="-ml-2 mr-2 flex items-center md:hidden">
							{/* Mobile menu button */}
							<Disclosure.Button className="group relative justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-700">
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Open main menu</span>
								<Bars3Icon
									aria-hidden="true"
									className="block h-6 w-6 group-data-[open]:hidden"
								/>
								<XMarkIcon
									aria-hidden="true"
									className="hidden h-6 w-6 group-data-[open]:block"
								/>
							</Disclosure.Button>
						</div>

						<div className="flex flex-shrink-0 items-center">
							<img
								alt="logo"
								src="../assets/logo.png"
								className="h-8 w-auto bg-orange-600 rounded-full px-2 py-2.5"
							/>
							<span className="font-bold ms-1.5">Fitness</span>
						</div>
					</div>

					<div className="hidden md:flex md:space-x-8">
						<a
							href="#"
							className="rounded-md px-3 py-1 my-1 text-sm font-medium text-gray-900 hover:bg-gray-100"
						>
							Find Gym
						</a>
						<a
							href="#"
							className="rounded-md px-3 py-1 my-1 text-sm font-medium text-gray-900 hover:bg-gray-100"
						>
							Buy Coins
						</a>
						<a
							href="#"
							className="rounded-md px-3 py-1 my-1 text-sm font-medium text-gray-900 hover:bg-gray-100"
						>
							Become a Partner
						</a>
						<a
							href="#"
							className="rounded-md px-3 py-1 my-1 text-sm font-medium text-gray-900 hover:bg-gray-100"
						>
							Contact Us
						</a>
					</div>

					<div className="flex flex-shrink-0 items-center">
						<button
							type="button"
							className="relative gap-x-1.5 rounded bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Get Started
						</button>
					</div>
				</div>
			</div>

			<Disclosure.Panel className="md:hidden relative bg-white">
				<div className="space-y-1 pb-3 pt-2 px-4 sm:px-6 z-[10000] absolute w-full bg-white shadow-2xl">
					<Disclosure.Button
						as="a"
						href="#"
						className="block rounded-md bg-gray-200 py-2 px-3 sm:pl-5 sm:pr-6 text-base font-medium text-gray-900"
					>
						Find Gym
					</Disclosure.Button>
					<Disclosure.Button
						as="a"
						href="#"
						className="block rounded-md py-2 px-3 sm:pl-5 sm:pr-6 text-base font-medium text-gray-900 hover:bg-gray-100"
					>
						Buy Coins
					</Disclosure.Button>
					<Disclosure.Button
						as="a"
						href="#"
						className="block rounded-md py-2 px-3 sm:pl-5 sm:pr-6 text-base font-medium text-gray-900 hover:bg-gray-100"
					>
						Become a Partner
					</Disclosure.Button>
					<Disclosure.Button
						as="a"
						href="#"
						className="block rounded-md py-2 px-3 sm:pl-5 sm:pr-6 text-base font-medium text-gray-900 hover:bg-gray-100"
					>
						Contact Us
					</Disclosure.Button>
				</div>
			</Disclosure.Panel>
		</Disclosure>
	);
}
