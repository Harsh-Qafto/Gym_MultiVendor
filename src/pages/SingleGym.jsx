/* eslint-disable no-unused-vars */
import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const SingleGym = () => {
	return (
		<>
			<div className="bg-white overflow-auto flex flex-col justify-center">
				<div className="max-w-7xl mx-auto py-[30px] sm:gap-[20px] lg:gap-[50px] inline-flex">
					<div className="flex-col justify-start items-start gap-[20px] flex-[2] inline-flex">
						<div
							className=" min-h-[50vh] bg-cover bg-center rounded-b-lg w-[100%] outline-none"
							style={{
								backgroundImage:
									'url("https://img.fitimg.in/studio_profile_8F97999C105600.png")',
							}}
						></div>
						<div className="flex-col justify-start items-start gap-5 flex">
							<div className="justify-start items-center gap-5 inline-flex">
								<img
									alt="FITPASS"
									height={140}
									width={140}
									className="rounded-[14px] border border-zinc-100 gm-added gm-loaded gm-observing gm-observing-cb"
									data-src="https://img.fitimg.in/studio_logo_5504_delhi.png"
									src="https://img.fitimg.in/studio_logo_5504_delhi.png?format=webp&w=576&dpr=1.0"
									loading="lazy"
								/>
								<div className="flex-col justify-start items-start gap-[15px] inline-flex">
									<h1 className="text-2xl font-semibold ">
										The New Body Temple Karol Bagh
									</h1>
									<div className="justify-center items-center gap-2.5 inline-flex">
										<div className="justify-center items-center gap-2.5 flex">
											<div className="  font-medium ">
												<span className="icon-star_ic text-green-500" />{" "}
												4.2
											</div>
											<div className="p-[3px] bg-zinc-100 flex-col justify-center text-xs font-medium items-center gap-2.5 inline-flex">
												11
											</div>
										</div>
										<div className="w-1.5 h-1.5 bg-black rounded-[19px]" />
										<div className="  font-medium ">
											Karol Bagh
										</div>
									</div>
									<div className="font-medium items-center gap-1 inline-flex">
										<span className="icon-time text-[#F04C4F]" />{" "}
										<span className="mt-1">
											06:00-22:30
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="text-sm font-bold uppercase">
							About Us
						</div>
						<div className="text-sm font-normal ">
							If you're looking for a workout facility that will
							help you achieve your fitness objectives, The New
							Body Temple is your one-stop shop. The greatest gym
							in your area is this one, which is situated in Karol
							Bagh, Delhi. To battle idleness, play forcefully,
							and develop internal strength, the personnel in the
							gym conducts necessary training sessions. So that
							fitness is no longer delayed, set your training
							objectives and visit this gym now.
						</div>
						<div className=" text-sm font-bold  uppercase">
							Amenities
						</div>
						<div className="self-stretch justify-start inline-flex gap-4">
							<div className="px-5 lg:px-6 py-3.2 lg:py-5 bg-[#f6f6f6] rounded-[10px] flex-col justify-center items-center gap-2 inline-flex">
								<span className="text-xl lg:text-3xl icon-ac text-[#00f]" />
								<div className="text-center text-xs font-normal ">
									AC
								</div>
							</div>
							<div className="px-5 lg:px-6 py-3.2 lg:py-5 bg-[#f6f6f6] rounded-[10px] flex-col justify-center items-center gap-2 inline-flex">
								<span className="text-xl lg:text-3xl icon-locker text-[#00f]" />
								<div className="text-center text-xs font-normal ">
									Locker
								</div>
							</div>
							<div className="px-5 lg:px-6 py-3.2 lg:py-5 bg-[#f6f6f6] rounded-[10px] flex-col justify-center items-center gap-2 inline-flex">
								<span className="text-xl lg:text-3xl icon-parking text-[#00f]" />
								<div className="text-center text-xs font-normal ">
									Parking
								</div>
							</div>
							<div className="px-5 lg:px-6 py-3.2 lg:py-5 bg-[#f6f6f6] rounded-[10px] flex-col justify-center items-center gap-2 inline-flex">
								<span className="text-xl lg:text-3xl icon-shawer text-gray-300" />
								<div className="text-center text-xs font-normal ">
									Shower
								</div>
							</div>
							<div className="px-5 lg:px-6 py-3.2 lg:py-5 bg-[#f6f6f6] rounded-[10px] flex-col justify-center items-center gap-2 inline-flex">
								<span className="text-xl lg:text-3xl icon-water-cooler text-[#00f]" />
								<div className="text-center text-xs font-normal ">
									Water Cooler
								</div>
							</div>
							<div className="px-5 lg:px-6 py-3.2 lg:py-5 bg-[#f6f6f6] rounded-[10px] flex-col justify-center items-center gap-2 inline-flex">
								<span className="text-xl lg:text-3xl icon-wifi text-[#00f]" />
								<div className="text-center text-xs font-normal ">
									WiFi
								</div>
							</div>
						</div>
						<div className="self-stretch flex-col justify-start items-start gap-5 flex">
							<div className=" text-sm font-bold  uppercase">
								Location
							</div>
							<div
								style={{
									position: "relative",
									width: "100%",
									height: 250,
									borderRadius: 8,
								}}
								className="mapboxgl-map"
							>
								<div
									className="mapboxgl-canary"
									style={{ visibility: "hidden" }}
								/>
								<div className="mapboxgl-canvas-container mapboxgl-interactive mapboxgl-touch-drag-pan mapboxgl-touch-zoom-rotate">
									<canvas
										className="mapboxgl-canvas"
										tabIndex={0}
										aria-label="Map"
										role="region"
										width={729}
										height={250}
										style={{ width: 729, height: 250 }}
									/>
									<div
										aria-label="Map marker"
										role="img"
										className="mapboxgl-marker mapboxgl-marker-anchor-bottom"
										style={{
											transform:
												"translate(365px, 125px) translate(-50%, -100%) translate(0px, 0px)",
										}}
									>
										<span className="icon-fitpass text-[50px] text-[#f04c4f]" />
									</div>
								</div>
								<div className="mapboxgl-control-container">
									<div className="mapboxgl-ctrl-top-left" />
									<div className="mapboxgl-ctrl-top-right" />
									<div className="mapboxgl-ctrl-bottom-left">
										<div
											className="mapboxgl-ctrl"
											style={{ display: "block" }}
										>
											<a
												className="mapboxgl-ctrl-logo"
												target="_blank"
												rel="noopener nofollow"
												href="https://www.mapbox.com/"
												aria-label="Mapbox logo"
											/>
										</div>
									</div>
									<div className="mapboxgl-ctrl-bottom-right" />
								</div>
								<div
									mapboxgl-children=""
									style={{ height: "100%" }}
								/>
							</div>
						</div>
						<div className="self-stretch flex-col justify-start items-start gap-[30px] flex">
							<div className="justify-between items-center inline-flex w-[100%]">
								<div className="justify-center items-center gap-2.5 flex">
									<div className=" text-sm font-bold  uppercase tracking-tight">
										11 Reviews
									</div>
									<div className="w-1 h-1 bg-black rounded-[19px]" />
									<div className="flex items-center gap-1">
										<span className="icon-star_ic text-[#e9d20b]" />{" "}
										4.2
									</div>
								</div>
							</div>
							<div className="self-stretch flex-col justify-start items-start gap-5 flex">
								<div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
									<div className="justify-start items-center gap-[15px] inline-flex">
										<img
											alt="Hitesh Singh"
											height={50}
											width={50}
											className="rounded-[25px] gm-added gm-loaded gm-observing gm-observing-cb"
											data-src="https://img.fitimg.in/cdn/web-assets/images/avtar-male.png"
											src="https://img.fitimg.in/cdn/web-assets/images/avtar-male.png?format=webp&w=300&dpr=1.0"
											loading="lazy"
										/>
										<div className="flex-col justify-start items-start gap-[5px] inline-flex">
											<div className="justify-center items-center gap-[5px] inline-flex">
												<div className=" text-sm font-medium ">
													Hitesh Singh
												</div>
												<div className="w-1 h-1 bg-black rounded-[19px]" />
												<div className=" text-xs font-normal ">
													19 October, 2022
												</div>
											</div>
											<div className="justify-center items-center gap-[5px] inline-flex">
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
											</div>
										</div>
									</div>
									<div className="self-stretch  text-sm font-normal ">
										Not only does The New Body Temple have
										the best kind of gym workout equipment
										and facilities but also has amazing
										trainers and make my fitness goals seem
										achievable. I feel gym workout is the
										best for me because through strength
										training I can release all the stress
										and it helps me stay calm. Would
										recommend it to everyone.
									</div>
								</div>
								<div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
									<div className="justify-start items-center gap-[15px] inline-flex">
										<img
											alt="Mohit Khurana "
											height={50}
											width={50}
											className="rounded-[25px] gm-added gm-loaded gm-observing gm-observing-cb"
											data-src="https://img.fitimg.in/cdn/web-assets/images/avtar-male.png"
											src="https://img.fitimg.in/cdn/web-assets/images/avtar-male.png?format=webp&w=300&dpr=1.0"
											loading="lazy"
										/>
										<div className="flex-col justify-start items-start gap-[5px] inline-flex">
											<div className="justify-center items-center gap-[5px] inline-flex">
												<div className=" text-sm font-medium ">
													Mohit Khurana{" "}
												</div>
												<div className="w-1 h-1 bg-black rounded-[19px]" />
												<div className=" text-xs font-normal ">
													24 October, 2022
												</div>
											</div>
											<div className="justify-center items-center gap-[5px] inline-flex">
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
											</div>
										</div>
									</div>
									<div className="self-stretch  text-sm font-normal ">
										I’ve been training with The New Body
										Temple for couple of months now, and
										believe they have the most experienced
										and committed trainers around who know
										what they are doing and help us train by
										being with us every step of the way, and
										having the finest machines and
										equipments. Highly recommended. People
										think gym workouts are easy but they
										aren't without the right guidance and
										yes, motivating yourself everyday is
										also a task but with The New Body Temple
										I feel like coming back everyday.
									</div>
								</div>
								<div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
									<div className="justify-start items-center gap-[15px] inline-flex">
										<img
											alt="Suraj Kumar"
											height={50}
											width={50}
											className="rounded-[25px] gm-added gm-loaded gm-observing gm-observing-cb"
											data-src="https://img.fitimg.in/cdn/web-assets/images/avtar-male.png"
											src="https://img.fitimg.in/cdn/web-assets/images/avtar-male.png?format=webp&w=300&dpr=1.0"
											loading="lazy"
										/>
										<div className="flex-col justify-start items-start gap-[5px] inline-flex">
											<div className="justify-center items-center gap-[5px] inline-flex">
												<div className=" text-sm font-medium ">
													Suraj Kumar
												</div>
												<div className="w-1 h-1 bg-black rounded-[19px]" />
												<div className=" text-xs font-normal ">
													25 October, 2022
												</div>
											</div>
											<div className="justify-center items-center gap-[5px] inline-flex">
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
											</div>
										</div>
									</div>
									<div className="self-stretch  text-sm font-normal ">
										I've been going to The New Body Temple
										for a couple of months now and my
										motivation has only increased since I
										started. The combination of having
										talented trainers, top class machines,
										and the best state-of-art facilites
										really makes it easy to keep coming back
										here for workouts.{" "}
									</div>
								</div>
								<div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
									<div className="justify-start items-center gap-[15px] inline-flex">
										<img
											alt="Jatin "
											height={50}
											width={50}
											className="rounded-[25px] gm-added gm-loaded gm-observing gm-observing-cb"
											data-src="https://img.fitimg.in/cdn/web-assets/images/avtar-male.png"
											src="https://img.fitimg.in/cdn/web-assets/images/avtar-male.png?format=webp&w=240&dpr=1.0"
											loading="lazy"
										/>
										<div className="flex-col justify-start items-start gap-[5px] inline-flex">
											<div className="justify-center items-center gap-[5px] inline-flex">
												<div className=" text-sm font-medium ">
													Jatin{" "}
												</div>
												<div className="w-1 h-1 bg-black rounded-[19px]" />
												<div className=" text-xs font-normal ">
													16 October, 2022
												</div>
											</div>
											<div className="justify-center items-center gap-[5px] inline-flex">
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
											</div>
										</div>
									</div>
									<div className="self-stretch  text-sm font-normal ">
										The New Body Temple is one of the best
										and very well equipped fitness center.
										The studio is highly kept up and
										sterile, has the best gym equipments,
										motivational enviroment, modern
										infrastructure and knowledgable trainers
										who know a lot about how to train right.
										While indulging in gym workouts it's
										very important to know the right
										exercises and how they affect the body
										and at this The New Body Temple I get to
										understand that.
									</div>
								</div>
								<div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
									<div className="justify-start items-center gap-[15px] inline-flex">
										<img
											alt="Lohith Rahul M"
											height={50}
											width={50}
											className="rounded-[25px] gm-added gm-loaded gm-observing gm-observing-cb"
											data-src="https://img.fitimg.in/cdn/web-assets/images/avtar-male.png"
											src="https://img.fitimg.in/cdn/web-assets/images/avtar-male.png?format=webp&w=300&dpr=1.0"
											loading="lazy"
										/>
										<div className="flex-col justify-start items-start gap-[5px] inline-flex">
											<div className="justify-center items-center gap-[5px] inline-flex">
												<div className=" text-sm font-medium ">
													Lohith Rahul M
												</div>
												<div className="w-1 h-1 bg-black rounded-[19px]" />
												<div className=" text-xs font-normal ">
													18 October, 2022
												</div>
											</div>
											<div className="justify-center items-center gap-[5px] inline-flex">
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
												<span className="icon-star_ic text-[#e9d20b]" />
											</div>
										</div>
									</div>
									<div className="self-stretch  text-sm font-normal ">
										Nothing can beat the experience I have
										had at The New Body Temple. Not only do
										they have great equipment and an
										enthusiastic environment for a
										fulfilling gym workout but also have
										trainers that have unmatched experience
										and who work with you to help you
										achieve the fitness goals you have set
										for yourself. Working out here, in such
										a motivational environment will also
										make you push yourself to kill it at
										those sessions.
									</div>
								</div>
							</div>
						</div>
						<div className="">
							<div className="self-stretch mt-[20px] text-sm font-bold uppercase">
								Studio Safety &amp; Hygiene
							</div>
							<ul className="list-disc pl-[20px] mt-[20px] leading-[1.5]">
								<li className="self-stretch text-sm font-normal mt-2">
									This fitness centre guarantees a clean and
									hygienic environment for a delightful
									visitor experience
								</li>
								<li className="self-stretch text-sm font-normal mt-2">
									Staff members diligently disinfect workout
									equipment after each use
								</li>
								<li className="self-stretch text-sm font-normal mt-2">
									Visitors are kindly requested to maintain
									cleanliness throughout their workout
									sessions
								</li>
								<li className="self-stretch text-sm font-normal mt-2">
									The centre also enforces a strict policy
									against misconduct; any misbehavior or
									negligence will not be tolerated by studio
									personnel.
								</li>
							</ul>
						</div>
					</div>
					<div className="flex-col max-w-[450px] min-w-[450px] justify-start items-end gap-[23px] inline-flex">
						<div className="self-stretch p-5 bg-neutral-100 sm:rounded-[10px] sm:border flex-col justify-end  gap-[20px] flex">
							<div className="font-bold">
								Book Session with FITPASS
							</div>
							<div className="self-stretch flex-col justify-end flex">
								<div className="flex-col justify-end items-start gap-2.5 flex">
									<div className="text-sm font-semibold  uppercase">
										Select Date
									</div>
									<div className=" py-2 rounded-[5px] gap-[10px] text-center inline-flex overflow-auto scrollbar-hide">
										<div className="px-2.5 flex-1 py-2 bg-red-500 text-white rounded-[5px] flex-col sm:cursor-pointer justify-center items-center gap-2.5 inline-flex">
											<div className="text-center text-xs font-medium whitespace-nowrap">
												FRI
												<br />
												25 OCT
											</div>
										</div>
										<div className="px-2.5 flex-1 py-2 bg-white rounded-[5px] flex-col sm:cursor-pointer justify-center items-center gap-2.5 inline-flex">
											<div className="text-center text-xs font-medium whitespace-nowrap">
												SAT
												<br />
												26 OCT
											</div>
										</div>
										<div className="px-2.5 flex-1 py-2 bg-white rounded-[5px] flex-col sm:cursor-pointer justify-center items-center gap-2.5 inline-flex">
											<div className="text-center text-xs font-medium whitespace-nowrap">
												SUN
												<br />
												27 OCT
											</div>
										</div>
										<div className="px-2.5 flex-1 py-2 bg-white rounded-[5px] flex-col sm:cursor-pointer justify-center items-center gap-2.5 inline-flex">
											<div className="text-center text-xs font-medium whitespace-nowrap">
												MON
												<br />
												28 OCT
											</div>
										</div>
										<div className="px-2.5 flex-1 py-2 bg-white rounded-[5px] flex-col sm:cursor-pointer justify-center items-center gap-2.5 inline-flex">
											<div className="text-center text-xs font-medium whitespace-nowrap">
												TUE
												<br />
												29 OCT
											</div>
										</div>
										<div className="px-2.5 flex-1 py-2 bg-white rounded-[5px] flex-col sm:cursor-pointer justify-center items-center gap-2.5 inline-flex">
											<div className="text-center text-xs font-medium whitespace-nowrap">
												WED
												<br />
												30 OCT
											</div>
										</div>
									</div>
								</div>
								<div className="self-stretch mt-[16px] flex-col justify-center flex">
									<div className="w-[79.36px] text-sm font-semibold uppercase">
										Workout
									</div>
									<div className="p-[5px] bg-white rounded-[5px] justify-start items-start gap-[5px] flex  overflow-auto scrollbar-hide">
										<div className="whitespace-nowrap sm:cursor-pointer px-2.5 py-2 text-center font-medium text-xs rounded-[5px] flex text-white bg-red-500">
											Gym Workout
										</div>
									</div>
								</div>
								<div className="self-stretch w-[100%] flex-col justify-end items-start gap-2.5 flex">
									<div className="w-[64.14px] mt-[20px] text-sm font-semibold  uppercase">
										Timings
									</div>
									<div className="self-stretch p-[5px] flex-wrap bg-white rounded-[5px] justify-start items-start gap-[15px] inline-flex max-h-[200px] overflow-auto">
										<div className="sm:cursor-pointer w-[60px] px-2.5 py-2 bg-red-500 text-white rounded-[5px] flex-col justify-center items-center gap-2.5 inline-flex text-xs font-medium">
											18:30
										</div>
										<div className="sm:cursor-pointer w-[60px] px-2.5 py-2  rounded-[5px] flex-col justify-center items-center gap-2.5 inline-flex text-xs font-medium">
											19:00
										</div>
										<div className="sm:cursor-pointer w-[60px] px-2.5 py-2  rounded-[5px] flex-col justify-center items-center gap-2.5 inline-flex text-xs font-medium">
											19:30
										</div>
										<div className="sm:cursor-pointer w-[60px] px-2.5 py-2  rounded-[5px] flex-col justify-center items-center gap-2.5 inline-flex text-xs font-medium">
											20:00
										</div>
										<div className="sm:cursor-pointer w-[60px] px-2.5 py-2  rounded-[5px] flex-col justify-center items-center gap-2.5 inline-flex text-xs font-medium">
											20:30
										</div>
										<div className="sm:cursor-pointer w-[60px] px-2.5 py-2  rounded-[5px] flex-col justify-center items-center gap-2.5 inline-flex text-xs font-medium">
											21:00
										</div>
										<div className="sm:cursor-pointer w-[60px] px-2.5 py-2  rounded-[5px] flex-col justify-center items-center gap-2.5 inline-flex text-xs font-medium">
											21:30
										</div>
									</div>
								</div>
								<div className="sm:cursor-pointer self-stretch px-[30px] mt-5 py-3 bg-red-500 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
									<div
										id="sd_reserveyourworkout"
										className="text-white  font-medium "
									>
										Reserve Your Workout
									</div>
								</div>
							</div>
						</div>
						<div className="p-5 rounded-[10px] border border-neutral-300 flex-col justify-start gap-[50px] flex">
							<div>
								<div className="font-bold ">
									FITPASS Benefits
								</div>
								<ul className="text-sm font-normal list-disc pl-5">
									<li className="mt-2">
										Access 8,100+ premium gyms and fitness
										centres across India
									</li>
									<li className="mt-2">
										Avail 2,25,000+ multiple workout
										sessions across the network
									</li>
									<li className="mt-2">
										Reserve workout slots as per your
										convenience from wherever you are
									</li>
								</ul>
							</div>
							<div>
								<div className="font-bold ">
									How FITPASS Works
								</div>
								<ul className="text-sm font-normal list-disc pl-5">
									<li className="mt-2">
										Register or log in using your mobile
										number
									</li>
									<li className="mt-2">
										Pick your suitable plan and activate
										your membership
									</li>
									<li className="mt-2">
										Reserve your convenient workout slot
										from available centres listed
									</li>
									<li className="mt-2">
										Now get set sweat to follow
										#YourFitnessYourWay
									</li>
								</ul>
							</div>
							<div>
								<div className="font-bold ">
									Our Sweatiquettes
								</div>
								<ul className="text-sm font-normal list-disc pl-5">
									<li className="mt-2">
										Arrive 15 minutes before your scheduled
										workout.
									</li>
									<li className="mt-2">
										Use the FITPASS application to scan and
										check in as soon as you arrive
									</li>
									<li className="mt-2">
										Adhere to your allotted workout time.
									</li>
									<li className="mt-2">
										Wear casual yet appropriate workout
										attire.
									</li>
									<li className="mt-2">
										Respect others' personal space,
										especially during peak hours.
									</li>
									<li className="mt-2">
										Help us maintain a safe environment for
										everyone. No Gaze, More Gain!
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="max-w-7xl mx-auto py-[20px] sm:py-[50px] ">
					<div className="text-[20px] sm:text-[28px] font-bold">
						Other studios nearby
					</div>
					<div className=" overflow-auto scrollbar-hide flex gap-[12px] sm:gap-[30px] pt-[20px] sm:pt-[40px]">
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_283759999067FCF0F89BE1448CF41F1F.jpeg"
								src="https://img.fitimg.in/studio_profile_283759999067FCF0F89BE1448CF41F1F.jpeg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Icon Of Martial Art Fitness Academy"
									className="line-clamp-1"
									href="/studio/icon-of-martial-art-fitness-academy-pulbangansh"
								>
									Icon Of Martial Art Fitness Academy
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="7869/A, Roshnara Road Opposite Mata Mandir"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										7869/A, Roshnara Road Opposite Mata
										Mandir
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												3.5
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											2
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_F75B6545CF1E001928EA0AC949D31E20.jpg"
								src="https://img.fitimg.in/studio_profile_F75B6545CF1E001928EA0AC949D31E20.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Golden Gym"
									className="line-clamp-1"
									href="/studio/golden-gym-shakti-nagar-delhi"
								>
									Golden Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="12/6 Near Food Corp Gowdown"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										12/6 Near Food Corp Gowdown
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												3.0
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											2
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_A7EF3B5AB877AA.png"
								src="https://img.fitimg.in/studio_profile_A7EF3B5AB877AA.png?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Fitness Future Gym"
									className="line-clamp-1"
									href="/studio/fitness-future-gym-karol-bagh"
								>
									Fitness Future Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="13A/26 Hotel Takshinn Basment  Channa Market"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										13A/26 Hotel Takshinn Basment Channa
										Market
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.1
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											44
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_7DFB8B16A0887F.png"
								src="https://img.fitimg.in/studio_profile_7DFB8B16A0887F.png?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Fitness Punch"
									className="line-clamp-1"
									href="/studio/fitness-punch-paharganj"
								>
									Fitness Punch
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="Hotel the spot, Chandi Wali Gali, Main Bazar Rd Paharganj"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										Hotel the spot, Chandi Wali Gali, Main
										Bazar Rd Paharganj
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												0.0
											</div>
										</div>
										0
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_7C66785EA41D12.png"
								src="https://img.fitimg.in/studio_profile_7C66785EA41D12.png?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Butterfly Gym & Fitness Academy"
									className="line-clamp-1"
									href="/studio/butterfly-gym-and-fitness-academy-east-patel-nagar"
								>
									Butterfly Gym &amp; Fitness Academy
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="29/8, Bodhraj Kohli Marg Block 29"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										29/8, Bodhraj Kohli Marg Block 29
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												3.9
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											49
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_47EFBE01901A30.png"
								src="https://img.fitimg.in/studio_profile_47EFBE01901A30.png?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Complete Fitness"
									className="line-clamp-1"
									href="/studio/complete-fitness-kamla-nagar-delhi"
								>
									Complete Fitness
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="7D, Secound Floor Block D"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										7D, Secound Floor Block D
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.7
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											20
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_BE46F78C7F7008.png"
								src="https://img.fitimg.in/studio_profile_BE46F78C7F7008.png?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Luxury Akhada Gym"
									className="line-clamp-1"
									href="/studio/luxury-akhada-gym-ashok-vihar"
								>
									Luxury Akhada Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="C-37 Phase- 3 JJ Colony, Sawan Park"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										C-37 Phase- 3 JJ Colony, Sawan Park
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.4
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											11
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_3EA57AE027A8A7.jpeg"
								src="https://img.fitimg.in/studio_profile_3EA57AE027A8A7.jpeg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="The Warrior Fitness"
									className="line-clamp-1"
									href="/studio/the-warrior-fitness-shakti-nagar-delhi"
								>
									The Warrior Fitness
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="19/1 A Basement"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										19/1 A Basement
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												5.0
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											33
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_5EC4EDC42A1844.png"
								src="https://img.fitimg.in/studio_profile_5EC4EDC42A1844.png?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Fitness Planet"
									className="line-clamp-1"
									href="/studio/fitness-planet-kirti-nagar"
								>
									Fitness Planet
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="C-66, Bhimsen Dhingra Rd, Block C,  Kirti Nagar, New Delhi, Delhi "
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										C-66, Bhimsen Dhingra Rd, Block C, Kirti
										Nagar, New Delhi, Delhi{" "}
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.7
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											10
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio-profile-9FD49CF10CE343.jpg"
								src="https://img.fitimg.in/studio-profile-9FD49CF10CE343.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Rahul Fitness Gym"
									className="line-clamp-1"
									href="/studio/rahul-fitness-gym-west-patel-nagar"
								>
									Rahul Fitness Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="33/1 BASEMENT Block 31"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										33/1 BASEMENT Block 31
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.4
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											10
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_FFB3C2C0D46FC0.jpeg"
								src="https://img.fitimg.in/studio_profile_FFB3C2C0D46FC0.jpeg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Flex 50 Fitness Physcio Rehab"
									className="line-clamp-1"
									href="/studio/flex-50-fitness-physcio-rehab-west-patel-nagar"
								>
									Flex 50 Fitness Physcio Rehab
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="3/17, near pinnacle store, Block 1, kalinga chowk"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										3/17, near pinnacle store, Block 1,
										kalinga chowk
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.4
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											5
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_6900BDCE00B7D4.jpeg"
								src="https://img.fitimg.in/studio_profile_6900BDCE00B7D4.jpeg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Fit Square Unisex Gym"
									className="line-clamp-1"
									href="/studio/fit-square-unisex-gym-west-patel-nagar"
								>
									Fit Square Unisex Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="Balraj Khanna Marg, Block U,  "
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										Balraj Khanna Marg, Block U,
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												3.9
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											12
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_30957CE368C9A9.jpeg"
								src="https://img.fitimg.in/studio_profile_30957CE368C9A9.jpeg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="The Gym Arene"
									className="line-clamp-1"
									href="/studio/the-gym-arene-kirti-nagar"
								>
									The Gym Arene
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="G-22, Kirtini nagar IDBI Bank basement"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										G-22, Kirtini nagar IDBI Bank basement
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.1
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											11
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio-profile-0A1AD7EA9DB622.jpg"
								src="https://img.fitimg.in/studio-profile-0A1AD7EA9DB622.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Super Fitness"
									className="line-clamp-1"
									href="/studio/super-fitness-roop-nagar-delhi"
								>
									Super Fitness
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="4/11, Street Number 4 Block 2"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										4/11, Street Number 4 Block 2
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												1.0
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											2
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_8F97999C105600.png"
								src="https://img.fitimg.in/studio_profile_8F97999C105600.png?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="The New Body Temple"
									className="line-clamp-1"
									href="/studio/the-new-body-temple-karol-bagh"
								>
									The New Body Temple
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="12-a/14, Saraswati Marg, Block  12A, WEA, Karol Bagh"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										12-a/14, Saraswati Marg, Block 12A, WEA,
										Karol Bagh
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.2
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											11
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_D2E9CAF2771CEE.jpg"
								src="https://img.fitimg.in/studio_profile_D2E9CAF2771CEE.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Stepsers Do The Step"
									className="line-clamp-1"
									href="/studio/stepsers-do-the-step-shanti-nagar-delhi"
								>
									Stepsers Do The Step
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="1791, Tri Nagar"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										1791, Tri Nagar
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.7
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											6
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_B03642C88E06D3.jpg"
								src="https://img.fitimg.in/studio_profile_B03642C88E06D3.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="D Core Fitness Gym"
									className="line-clamp-1"
									href="/studio/d-core-fitness-gym-paharganj"
								>
									D Core Fitness Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="building no-70, 2nd floor ranijhashi road jhandewala"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										building no-70, 2nd floor ranijhashi
										road jhandewala
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												0.0
											</div>
										</div>
										0
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_20B4D5036DC082.jpeg"
								src="https://img.fitimg.in/studio_profile_20B4D5036DC082.jpeg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="City Rock Gym Fitness Club"
									className="line-clamp-1"
									href="/studio/city-rock-gym-fitness-club-paharganj"
								>
									City Rock Gym Fitness Club
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="building number -2176 3rd floor  chuna mandi"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										building number -2176 3rd floor chuna
										mandi
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.0
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											6
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_BCBF0550551CF7.jpg"
								src="https://img.fitimg.in/studio_profile_BCBF0550551CF7.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Road 2 Fitness"
									className="line-clamp-1"
									href="/studio/road-2-fitness-rana-pratap-bagh"
								>
									Road 2 Fitness
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="C 1/4 Near Jaina Dairy"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										C 1/4 Near Jaina Dairy
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												1.9
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											17
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_2330A0B3CDAD73.png"
								src="https://img.fitimg.in/studio_profile_2330A0B3CDAD73.png?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Team Satpal Gym"
									className="line-clamp-1"
									href="/studio/team-satpal-gym-west-patel-nagar"
								>
									Team Satpal Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="Cottage -18 West Patel Nagar"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										Cottage -18 West Patel Nagar
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												3.3
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											3
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_CC6387458EB5B0.jpg"
								src="https://img.fitimg.in/studio_profile_CC6387458EB5B0.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Fit Pros Gym"
									className="line-clamp-1"
									href="/studio/fit-pros-gym-south-patel-nagar"
								>
									Fit Pros Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="Block -9 , House no. -1 Basement south Patel nagar"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										Block -9 , House no. -1 Basement south
										Patel nagar
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.4
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											5
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_B79C847F106434.png"
								src="https://img.fitimg.in/studio_profile_B79C847F106434.png?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Delhi Fitness Gym"
									className="line-clamp-1"
									href="/studio/delhi-fitness-gym-south-patel-nagar"
								>
									Delhi Fitness Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="building no. -33, near rajendra place  gol chakkar, Service Lane"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										building no. -33, near rajendra place
										gol chakkar, Service Lane
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.0
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											4
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_FA950A6E1DFE23.jpg"
								src="https://img.fitimg.in/studio_profile_FA950A6E1DFE23.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Revamp Fitness Studio"
									className="line-clamp-1"
									href="/studio/revamp-fitness-shakti-nagar-delhi"
								>
									Revamp Fitness Studio
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="24/4 main road Shakti Nagar"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										24/4 main road Shakti Nagar
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												3.8
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											10
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_6A6DC1FDB80D4E.jpg"
								src="https://img.fitimg.in/studio_profile_6A6DC1FDB80D4E.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="ProFit Gym"
									className="line-clamp-1"
									href="/studio/profit-gym-kirti-nagar"
								>
									ProFit Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="42, 2nd floor DLF"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										42, 2nd floor DLF
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.8
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											5
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_4EB6EDF64B5D13.jpg"
								src="https://img.fitimg.in/studio_profile_4EB6EDF64B5D13.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Body Crunch Fitness"
									className="line-clamp-1"
									href="/studio/body-crunch-fitness-shakti-nagar-delhi"
								>
									Body Crunch Fitness
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="A-1/6  Shakti nagar extension"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										A-1/6 Shakti nagar extension
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.0
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											1
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_F1D0FCAD38CF9E.jpg"
								src="https://img.fitimg.in/studio_profile_F1D0FCAD38CF9E.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Fitness MustG Gym"
									className="line-clamp-1"
									href="/studio/fitness-mustg-gym-chawri-bazar"
								>
									Fitness MustG Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="1057, 1st Floor, Main RD Sita Ram Bazar"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										1057, 1st Floor, Main RD Sita Ram Bazar
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												0.0
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_C2E62F0AC8B840.jpg"
								src="https://img.fitimg.in/studio_profile_C2E62F0AC8B840.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="The Warrior Gym"
									className="line-clamp-1"
									href="/studio/the-warrior-gym-kirti-nagar"
								>
									The Warrior Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="D-11, basement near yes bank  kirti nagar round about"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										D-11, basement near yes bank kirti nagar
										round about
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												0.0
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio-profile-0BEF1F74181A01.jpeg"
								src="https://img.fitimg.in/studio-profile-0BEF1F74181A01.jpeg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="The Wellness Club Gym Xpress"
									className="line-clamp-1"
									href="/studio/the-wellness-club-gym-xpress-west-patel-nagar"
								>
									The Wellness Club Gym Xpress
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="5/5 1st floor Near Sharma Sweets"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										5/5 1st floor Near Sharma Sweets
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.5
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											15
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio-profile-C9CE571402B73B.jpg"
								src="https://img.fitimg.in/studio-profile-C9CE571402B73B.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Healthways Swim 'N' Gym"
									className="line-clamp-1"
									href="/studio/healthways-swim-n-gym-keshavpuram-delhi"
								>
									Healthways Swim 'N' Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="central school, opp. b-2 block Lawrence road"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										central school, opp. b-2 block Lawrence
										road
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												4.1
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											10
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_EC4F5220E185D8.jpg"
								src="https://img.fitimg.in/studio_profile_EC4F5220E185D8.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="The Wellness Club Gym Xpress"
									className="line-clamp-1"
									href="/studio/the-wellness-club-gym-xpress-karol-bagh"
								>
									The Wellness Club Gym Xpress
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="8A/54, WEA Channa Market"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										8A/54, WEA Channa Market
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												0.0
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_5DE6F14E32D887.jpg"
								src="https://img.fitimg.in/studio_profile_5DE6F14E32D887.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="THE GYM Health Planet"
									className="line-clamp-1"
									href="/studio/the-gym-health-planet-east-patel-nagar"
								>
									THE GYM Health Planet
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="6/15 East patelnagar near by Neulife store "
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										6/15 East patelnagar near by Neulife
										store{" "}
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												5.0
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											1
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio_profile_061FD9B95BBD41.jpg"
								src="https://img.fitimg.in/studio_profile_061FD9B95BBD41.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="THE GYM Health Planet"
									className="line-clamp-1"
									href="/studio/the-gym-health-planet-kirti-nagar"
								>
									THE GYM Health Planet
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="I, VLCC, 102, Block - I Tower Building, Basement"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										I, VLCC, 102, Block - I Tower Building,
										Basement
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												5.0
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											4
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio-profile-8E4A0F21C52F61.jpg"
								src="https://img.fitimg.in/studio-profile-8E4A0F21C52F61.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Road 2 Fitness"
									className="line-clamp-1"
									href="/studio/road-2-fitness-kamla-nagar-delhi"
								>
									Road 2 Fitness
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="A-41, Near Gopal Sweets Beside Andra Bank ATM"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										A-41, Near Gopal Sweets Beside Andra
										Bank ATM
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												5.0
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											1
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio-profile-689B308C5247C9.jpg"
								src="https://img.fitimg.in/studio-profile-689B308C5247C9.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Fitreaks Gym"
									className="line-clamp-1"
									href="/studio/fitreaks-gym-ashok-vihar-delhi"
								>
									Fitreaks Gym
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="MAJOR DHYAN CHAND SPORTS COMPLEX JJ Colony Wazirpur"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										MAJOR DHYAN CHAND SPORTS COMPLEX JJ
										Colony Wazirpur
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												1.0
											</div>
										</div>
										<div className="p-[3px] text-black text-xs font-medium bg-zinc-100 rounded flex-col justify-center items-center gap-2.5 inline-flex">
											2
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="min-w-[200px] sm:min-w-[300px]  max-w-[350px]  flex-col justify-start items-start gap-2 sm:gap-5 inline-flex">
							<img
								alt="FITPASS"
								className="w-[100%] h-[180px] sm:h-[230px] rounded-[10px] border object-cover gm-added gm-loaded gm-observing gm-observing-cb"
								data-src="https://img.fitimg.in/studio-profile-BCA6FFD8DD1666.jpg"
								src="https://img.fitimg.in/studio-profile-BCA6FFD8DD1666.jpg?format=webp&w=300&dpr=1.0"
								loading="lazy"
							/>
							<div className="text-black text-sm sm:text-xl font-bold flex-col justify-start items-start gap-1 sm:gap-2.5 flex">
								<a
									title="Alligator Fitness"
									className="line-clamp-1"
									href="/studio/alligator-fitness-paharganj"
								>
									Alligator Fitness
								</a>
								<div className="justify-start  items-start gap-1 sm:gap-2.5 inline-flex">
									<div
										ttile="3/8, Desh Bandhu Gupta Rd, near State Bank of India ATM, Bazar Sangatrashan, Multani Dhanda, Paharganj"
										className="text-black text-xs font-medium uppercase line-clamp-2"
									>
										3/8, Desh Bandhu Gupta Rd, near State
										Bank of India ATM, Bazar Sangatrashan,
										Multani Dhanda, Paharganj
									</div>
									<div className="justify-center items-center gap-[5px] hidden sm:flex">
										<div className="justify-center items-center gap-1 flex">
											<div className="icon-star_ic text-yellow-300" />
											<div className="text-black text-base font-medium ">
												0.0
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="max-w-7xl mx-auto">
					<div className="mt-[20px] md:mt-[50px] mb-[20px] md:mb-[50px] justify-start items-start gap-[25px] md:gap-[40px] lg:gap-[60px] flex-col md:flex-row max-w-7xl flex">
						<div className="flex-col justify-start items-start gap-2.5 inline-flex sm:min-w-[28%] flex-1">
							<div className="text-[24px] min-w-[240px] md:text-[30px] lg:text-[38px] font-semibold">
								Know everything about Fitness Centres
							</div>
							<div className="xm:mb-[20px] xm:text-[14px] text-xs xs:text-sm md:text-base lg:text-xl font-medium">
								Explore the answers to understand this
								innovative feature better so you stay ahead in
								your fitness journey.
							</div>
						</div>
						<div className="flex-[1.8] w-[100%]">
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="flex items-start justify-between w-full py-2">
											<div className="max-w-[90%] self-stretch font-medium text-sm md:text-lg flex-col justify-start items-start gap-5 flex">
												How do I find gyms or fitness
												centres near me?
											</div>
											{open ? (
												<ChevronUpIcon className="h-5 w-5 font-bold" />
											) : (
												<ChevronDownIcon className="h-5 w-5 font-bold" />
											)}
										</Disclosure.Button>
										<Transition
											show={open}
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="text-xs md:text-base mb-[20px]">
												You can find gyms and fitness
												centres near your location
												through the FITPASS app or
												website. Simply open the app,
												click on Fitness
												Centers,&nbsp;and it will
												display all the available
												options in and around your area.
												You can then filter or sort the
												results according to your
												preferences, such as specific
												types of classes or activities.
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<div className="border mb-[8px] mt-[3px] md:mb-[15px] md:mt-[10px] border-t-[rgba(223, 223, 223, 0.5)]" />

							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="flex items-start justify-between w-full py-2">
											<div className="max-w-[90%] self-stretch font-medium text-sm md:text-lg flex-col justify-start items-start gap-5 flex">
												What if there are no gyms or
												fitness centres listed near my
												area?
											</div>
											{open ? (
												<ChevronUpIcon className="h-5 w-5 font-bold" />
											) : (
												<ChevronDownIcon className="h-5 w-5 font-bold" />
											)}
										</Disclosure.Button>
										<Transition
											show={open}
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="text-xs md:text-base mb-[20px]">
												If the app or website does not
												show any gyms or fitness centres
												near your location, you can
												contact customer support at
												care@fitpass.co.in for
												assistance. They may be able to
												provide additional information
												or suggest alternative options.
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<div className="border mb-[8px] mt-[3px] md:mb-[15px] md:mt-[10px] border-t-[rgba(223, 223, 223, 0.5)]" />

							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="flex items-start justify-between w-full py-2">
											<div className="max-w-[90%] self-stretch font-medium text-sm md:text-lg flex-col justify-start items-start gap-5 flex">
												Can I search for specific types
												of fitness classes or
												activities?
											</div>
											{open ? (
												<ChevronUpIcon className="h-5 w-5 font-bold" />
											) : (
												<ChevronDownIcon className="h-5 w-5 font-bold" />
											)}
										</Disclosure.Button>
										<Transition
											show={open}
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="text-xs md:text-base mb-[20px]">
												Yes, the FITPASS app and website
												allow you to filter or sort the
												available gyms and fitness
												centres based on your needs. For
												example, if you're interested in
												Spinning classes, you can browse
												through the options near your
												area and choose a suitable
												facility that offers those
												classes.
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<div className="border mb-[8px] mt-[3px] md:mb-[15px] md:mt-[10px] border-t-[rgba(223, 223, 223, 0.5)]" />

							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="flex items-start justify-between w-full py-2">
											<div className="max-w-[90%] self-stretch font-medium text-sm md:text-lg flex-col justify-start items-start gap-5 flex">
												How up-to-date is the gym and
												fitness centre information?
											</div>
											{open ? (
												<ChevronUpIcon className="h-5 w-5 font-bold" />
											) : (
												<ChevronDownIcon className="h-5 w-5 font-bold" />
											)}
										</Disclosure.Button>
										<Transition
											show={open}
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="text-xs md:text-base mb-[20px]">
												The FITPASS app and website
												strive to provide the most
												up-to-date information on
												available gyms and fitness
												centres. However, it's always a
												good idea to check with the
												specific facility for the most
												accurate and current information
												on their offerings and
												schedules.
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>
							<div className="border mb-[8px] mt-[3px] md:mb-[15px] md:mt-[10px] border-t-[rgba(223, 223, 223, 0.5)]" />

							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="flex items-start justify-between w-full py-2">
											<div className="max-w-[90%] self-stretch font-medium text-sm md:text-lg flex-col justify-start items-start gap-5 flex">
												Can I get a trial or guest pass
												before committing to a FITPASS
												membership?
											</div>
											{open ? (
												<ChevronUpIcon className="h-5 w-5 font-bold" />
											) : (
												<ChevronDownIcon className="h-5 w-5 font-bold" />
											)}
										</Disclosure.Button>
										<Transition
											show={open}
											enter="transition duration-100 ease-out"
											enterFrom="transform scale-95 opacity-0"
											enterTo="transform scale-100 opacity-100"
											leave="transition duration-75 ease-out"
											leaveFrom="transform scale-100 opacity-100"
											leaveTo="transform scale-95 opacity-0"
										>
											<Disclosure.Panel className="text-xs md:text-base mb-[20px]">
												No, FITPASS currently does not
												offer a trial or guest pass for
												workouts. However, if you wish
												to exercise at a particular gym
												for a short duration, you can
												avail of our monthly offer plan
												for Rs.999* and visit a fitness
												centre of your choice upto 5
												times a month.
											</Disclosure.Panel>
										</Transition>
									</>
								)}
							</Disclosure>

							<div className="border mb-[8px] mt-[3px] md:mb-[15px] md:mt-[10px] border-t-[rgba(223, 223, 223, 0.5)]" />
							<div className="text-xs sm:text-[16px] font-semibold flex items-center">
								Can't find an answer? Reach out to our team
								directly at care@fitpass.co.in or dial
								1800-5714-466.
							</div>
						</div>
					</div>
					<div className="mt-[12px] sm:mt-[20px]">
						<div
							className="w-[100%] bg-cover sm:bg-[100%] overflow-hidden h-[263px] p-[20px] sm:p-[30px] md:p-[50px] bg-opacity-70 sm:rounded-[10px] relative justify-center sm:justify-between items-center gap   sm:gap-[100px] flex flex-col sm:flex-row"
							style={{
								backgroundImage:
									'url("https://img.fitimg.in/cdn/web-assets/images/ratings-images/fitpass-img.png")',
								backgroundColor: "rgba(0, 0, 0, 0.5)",
								backgroundBlendMode: "overlay",
							}}
						>
							<div className="sm:hidden text-white z-[2] font-bold text-2xl mb-3">
								Best Fitness App
							</div>
							<div className="sm:w-[400px] lg:w-[530px] text-white text-[16px] xs:text-[22px] sm:text-[28px] text-center sm:text-left font-medium z-[2]">
								Trusted by over 6 million customers all across
								India since 2016
							</div>
							<div className="flex sm:flex-1 justify-around mt-5 sm:mt-0 ">
								<div className="flex-col justify-start items-center gap-2 sm:gap-5 inline-flex z-[2]">
									<div className="text-center text-white text-2xl sm:text-6xl font-bold tracking-widest">
										4.7
									</div>
									<div className="text-center text-white text-sm sm:text-2xl font-semibold tracking-wide">
										30K+ Rating
									</div>
								</div>
								<div className="flex-col justify-start items-center gap-2 sm:gap-5 inline-flex z-[2]">
									<div className="text-center text-white text-2xl sm:text-6xl font-bold tracking-widest">
										6M+
									</div>
									<div className="w-48 text-center text-white text-sm sm:text-2xl font-semibold tracking-wide">
										Downloads all over India
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};



const About = () => {
	return (
		<div>
			{/* Story Section */}
			<section className="px-4 sm:px-6 py-12 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
				<div className="md:w-2/4">
					<h2 className="text-3xl md:text-4xl font-semibold mb-4">
						The story behind our Gym
					</h2>
					<p className="text-gray-600 mb-4 leading-relaxed">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo viverra sit morbi egestas consequat in quisque placerat enim. Nulla, lacus eros eget sed suspendisse nascetur consequat. Tellus mi id lacus amet sit tortor lorem id montes.
					</p>
					<p className="text-gray-600 leading-relaxed">
						Convallis iaculis nam.
					</p>
				</div>
				<div className="md:w-1/3">
					<img
						src="https://s3-alpha-sig.figma.com/img/ddd5/be22/60ee556cc9e6448b5b1ad2ab6bdeb5a0?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oNfayk24Mv04oMg8U5LNTaEfYTWtZnG8y~TP2NZgYmO1Shh3v-ERKhKj71TDH02IbcXafKacdJiEDZFzR1NPEHTCQT3h3dz-UpoOkY5mNt9DXgXZtzebpPYrck4Wkmkl5EjoeNBRW~Ep4skgSEk-G1lsHdklDxaSqrsjyiSGGz9b8LFinmNxr7icRAfGKR~j-5PLMa9jQfzDdHZJ4WATX68n-446VV6t1utLl2DaiXvPohLFnutEHT79lD8v9cszo3mA4ORtZF~DTdqdNZuGzq1P9nxkk1qx9oYON0BThglpTc1fQL0HiqIt48I0R8uF5iMC1oxTG1ZrrQv1r8YJZQ__" // Replace with actual image URL
						alt="Gym Story"
						className="rounded-lg shadow-lg w-full max-h-96 object-cover object-top"
					/>
				</div>
			</section>

			{/* Core Values Section */}
			<section className="px-4 sm:px-6 py-12 max-w-7xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-semibold mb-10">
					The core values we believe in
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{[
						{ icon: <span className="mdi mdi-fire-circle text-7xl" />, title: "Passion" },
						{ icon: <span className="mdi mdi-account-multiple text-7xl" />, title: "Community" },
						{ icon: <span className="mdi mdi-heart text-7xl" />, title: "Commitment" },
						{ icon: <span className="mdi mdi-chart-timeline-variant text-7xl" />, title: "Growth" },
					].map((value, index) => (
						<div
							key={index}
							className="border border-black p-8 rounded hover:shadow-lg transition duration-200 gap-4"
						>
							{value.icon}
							<div className="text-left">
								<h3 className="text-xl font-semibold mb-2">{value.title}</h3>
								<p className="text-sm">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="px-4 sm:px-6 py-12 max-w-7xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl max-w-96 mx-auto font-semibold mb-4">
					What our beloved clients say
				</h2>
				<p className="text-gray-600 mb-10">
					Lorem ipsum dolor sit amet, consectetur adipiscingol elit. adipiscing amet, aliquet orci tellus lorem ip.				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{[
						{
							text: "6 months after joining I lost 15kg and I'm getting stronger!",
							pic: 'https://s3-alpha-sig.figma.com/img/8aaf/3438/e4ab93797e12ae06ade132c93d0f48ef?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inX0eB8OA8oHWO78CAeK9OMBTVhfyvVTxg0R4boIBpCI~O7~XnpkUroMGWyX76k2amXkBhe3QFkcpl7BAof6pUo78~HNHP3xfPJBtdP-J8p7-hcZYaGyqDnPlW3T3st7eGlIzlIDKIWV9DO1IXxFEjfo3US0OjBGhjS1fguR7MLwyadyRk5lil4DuywB8I~PukFeRLRfDSNgvf8ci8tDuIHhRViE7WmNgtxSNykLXe9uBc2Vbpt2VydL1FMUJg~C42~6KKTGKui3DHQ5yNFBEQmPOqMpS308t~Uu5XbtLnfEBru0U-AEG00pUFLtHNIu5pDtYV6sk0ruNLzwiwx5pw__',
							name: "Mark Hamill",
						},
						{
							text: "I've gotten so much stronger after joining the gym. My deadlift increased by 50kg.",
							pic: 'https://s3-alpha-sig.figma.com/img/8aaf/3438/e4ab93797e12ae06ade132c93d0f48ef?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inX0eB8OA8oHWO78CAeK9OMBTVhfyvVTxg0R4boIBpCI~O7~XnpkUroMGWyX76k2amXkBhe3QFkcpl7BAof6pUo78~HNHP3xfPJBtdP-J8p7-hcZYaGyqDnPlW3T3st7eGlIzlIDKIWV9DO1IXxFEjfo3US0OjBGhjS1fguR7MLwyadyRk5lil4DuywB8I~PukFeRLRfDSNgvf8ci8tDuIHhRViE7WmNgtxSNykLXe9uBc2Vbpt2VydL1FMUJg~C42~6KKTGKui3DHQ5yNFBEQmPOqMpS308t~Uu5XbtLnfEBru0U-AEG00pUFLtHNIu5pDtYV6sk0ruNLzwiwx5pw__',
							name: "Sarah Connor",
						},
						{
							text: "With a new perspective about health and fitness the gym has become like a community to me.",
							pic: 'https://s3-alpha-sig.figma.com/img/8aaf/3438/e4ab93797e12ae06ade132c93d0f48ef?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inX0eB8OA8oHWO78CAeK9OMBTVhfyvVTxg0R4boIBpCI~O7~XnpkUroMGWyX76k2amXkBhe3QFkcpl7BAof6pUo78~HNHP3xfPJBtdP-J8p7-hcZYaGyqDnPlW3T3st7eGlIzlIDKIWV9DO1IXxFEjfo3US0OjBGhjS1fguR7MLwyadyRk5lil4DuywB8I~PukFeRLRfDSNgvf8ci8tDuIHhRViE7WmNgtxSNykLXe9uBc2Vbpt2VydL1FMUJg~C42~6KKTGKui3DHQ5yNFBEQmPOqMpS308t~Uu5XbtLnfEBru0U-AEG00pUFLtHNIu5pDtYV6sk0ruNLzwiwx5pw__',
							name: "Jenny Singh",
						},
					].map((testimonial, index) => (
						<div
							key={index}
							className="bg-orange-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200"
						>
							<div className="flex items-center gap-1 text-2xl mb-2 mx-auto w-fit"><span className="mdi mdi-star text-yellow-400" /><span className="mdi mdi-star text-yellow-400" /><span className="mdi mdi-star text-yellow-400" /><span className="mdi mdi-star text-yellow-400" /><span className="mdi mdi-star text-yellow-400" /></div>
							<p className="mb-4">{testimonial.text}</p>
							<img className="w-12 h-12 rounded-full mx-auto object-cover" src={testimonial.pic} alt="profile" />
							<p className="text-gray-600 mt-2">— {testimonial.name}</p>
						</div>
					))}
				</div>
			</section>

			{/* Instagram Section */}
			<section className="px-4 sm:px-6 py-12 max-w-7xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-semibold mb-8">
					Follow on <a href="#" className="text-blue-500 underline">INSTAGRAM</a>
				</h2>
				<div className="flex flex-col md:flex-row gap-2">
					<div className="md:w-1/3 grid grid-cols-2 md:grid-cols-2 gap-2">
						{[...Array(4)].map((_, index) => (
							<img
								key={index}
								src="https://s3-alpha-sig.figma.com/img/9e41/fda8/1e722ede3db285e5c52586907398962e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fzceVfPtkmCYp~1J12O2iBHg1p7kHeFNU1DV4WbysRf-oNOQh8lnNXayhSh0BD4dKidS0krva1iCOFiOhnV62huE5ybDElHbfdymJ76H1uNQBN62lFx0DamjLus4od8Z4osM-vBuV99WKzOo6uKL6IfZDODyXsC8JnMKadQVcKMXT8OYiChebtbmQ2uYyyO1Fw5x49lgq9o-4nsXWFve3cJe9oVHi-qWne5GcfoPF50oLffH5CltWhUdVQ3AttRVq~eYpwEe1DmVRl-jnpJskph8cpgDLkZm4nuC8ifX-iQqSld4OKTm5E~tqbg3EcIYtWp3nr~179VQZwtVYx0Xtw__"
								alt={`Instagram post ${index + 1}`}
								className="rounded-lg w-full h-full object-cover"
							/>
						))}
					</div>
						<img
								src="https://s3-alpha-sig.figma.com/img/9e41/fda8/1e722ede3db285e5c52586907398962e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fzceVfPtkmCYp~1J12O2iBHg1p7kHeFNU1DV4WbysRf-oNOQh8lnNXayhSh0BD4dKidS0krva1iCOFiOhnV62huE5ybDElHbfdymJ76H1uNQBN62lFx0DamjLus4od8Z4osM-vBuV99WKzOo6uKL6IfZDODyXsC8JnMKadQVcKMXT8OYiChebtbmQ2uYyyO1Fw5x49lgq9o-4nsXWFve3cJe9oVHi-qWne5GcfoPF50oLffH5CltWhUdVQ3AttRVq~eYpwEe1DmVRl-jnpJskph8cpgDLkZm4nuC8ifX-iQqSld4OKTm5E~tqbg3EcIYtWp3nr~179VQZwtVYx0Xtw__"
								alt={`Instagram post`}
								className="md:w-1/3 rounded-lg w-full h-full object-cover"
							/>
							<div className=" md:w-1/3 grid grid-cols-2 md:grid-cols-2 gap-2">
						{[...Array(4)].map((_, index) => (
							<img
								key={index}
								src="https://s3-alpha-sig.figma.com/img/9e41/fda8/1e722ede3db285e5c52586907398962e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fzceVfPtkmCYp~1J12O2iBHg1p7kHeFNU1DV4WbysRf-oNOQh8lnNXayhSh0BD4dKidS0krva1iCOFiOhnV62huE5ybDElHbfdymJ76H1uNQBN62lFx0DamjLus4od8Z4osM-vBuV99WKzOo6uKL6IfZDODyXsC8JnMKadQVcKMXT8OYiChebtbmQ2uYyyO1Fw5x49lgq9o-4nsXWFve3cJe9oVHi-qWne5GcfoPF50oLffH5CltWhUdVQ3AttRVq~eYpwEe1DmVRl-jnpJskph8cpgDLkZm4nuC8ifX-iQqSld4OKTm5E~tqbg3EcIYtWp3nr~179VQZwtVYx0Xtw__"
								alt={`Instagram post ${index + 1}`}
								className="rounded-lg w-full h-full object-cover"
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

const Services = () => {
  return (
    <div className="py-12 md:py-24">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-10">
        We offer something for everybody
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-7xl mx-auto px-4 sm:px-6">
        {[
          { title: "Strength Training", imgSrc: "https://s3-alpha-sig.figma.com/img/dea5/640f/d3ea7e7367b25ee5bfe510527e3776ac?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2i1JNrpkiM1ffmAOoruhPn7SO6biJqcXwtqApbbyx9Cz-Cpvfg6j0U~F3spVXgSsoHsNBw-DREwRpv9EWcIG9Mb4h9qWuWlwe8ESAKkN6ZXEVoVcHXOI90IGHfGSg-nGhnmgmD38OrBcAQASA5SVIKK01yxZde~EIXah8SgeOtLv6wVLZx4KJ3VTpITZTES75hpf~jy9XGk4P9eEJGg0i3ZOE080222kgRPamM0w9ruxQP5H0qYfMWltnJd2iFKn6vcW7VO3nVgdI5IIoKHYoT-JwUk4HUyDsnau7H0nxyQLFoeOV8PIIGM9m4i19RY5CiYxWULSIR~okHZ1Dzz4g__" },
          { title: "Cardio Training", imgSrc: "https://s3-alpha-sig.figma.com/img/60ec/8cb9/1e6950c63475f795ed1d704ed3af61e8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cieRDP1yBtDE8wE01DNKOr9QznXtAzPPTlRaXdRNWWr-cpobaHs7rjrI1u937b7jIjXR1CBXA-vPhAPQu7faB-pfsJWl-2J4k6STLO-tAzAqqf4RpHYZR1~RiPEBgwPKUmkqEnDdtHnkyDhZQd52eZEET0vlql6bpDBMJsn-AGXBoVkNJeoyNszn50RL2fDL9POiQLVFuNcnCSHdj-FQ5E1Xku8TRn3ZmkD29CIkpC1nzwt9zBZOaKC9giJ0W1larxPs-nlFb0kn9uyZn3piq9ZDPIcVC2s8jpBYODXjA9Cjl~jj05kA48bHlnh~ti44iwTEVqJgZy0i4aBmPrGPSQ__" },
          { title: "CrossFit Group Classes", imgSrc: "https://s3-alpha-sig.figma.com/img/9e41/fda8/1e722ede3db285e5c52586907398962e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fzceVfPtkmCYp~1J12O2iBHg1p7kHeFNU1DV4WbysRf-oNOQh8lnNXayhSh0BD4dKidS0krva1iCOFiOhnV62huE5ybDElHbfdymJ76H1uNQBN62lFx0DamjLus4od8Z4osM-vBuV99WKzOo6uKL6IfZDODyXsC8JnMKadQVcKMXT8OYiChebtbmQ2uYyyO1Fw5x49lgq9o-4nsXWFve3cJe9oVHi-qWne5GcfoPF50oLffH5CltWhUdVQ3AttRVq~eYpwEe1DmVRl-jnpJskph8cpgDLkZm4nuC8ifX-iQqSld4OKTm5E~tqbg3EcIYtWp3nr~179VQZwtVYx0Xtw__" },
          { title: "Fun with Friends", imgSrc: "https://s3-alpha-sig.figma.com/img/58d8/dcb9/27851ee8c619b6ba8c17570508367cd3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xlc25PnD9ZnqblllxdUwy6K0CjpQiIDz3mmQzdOps2i-VO00WfqkQOD26IJA7MbyCnit8vVUZAbSsPjFaisGO78HqJTLFn~9AuYp1dK295YuqGegOvRJ7iAbeqNa1NPkUyHSUnM5hEwerqTjiRyNq9HmuDhWxkoUEP-ziiwLG0X~93pzQcBopmACNmbaI~jtYX6TJ6gg0oo11pxhzup5YQ4~a6kkeE90xB1W7OzsjE23lLbC8C6LU70uLTeOndaQxWR0MRkAZUyvTstBBOh9-uCaWJ8E7N~c0c9Y-MQ2OV-yd8fVXoELf9ALfMc93oS4vioHvzsbuZW~1lEpSpaBsw__" },
        ].map((program, index) => (
          <div key={index} className="relative">
            <img
              src={program.imgSrc}
              alt={program.title}
              className="w-full h-full aspect-square object-cover rounded-lg"
            />
            <div className="absolute inset-0  flex items-center justify-center rounded-lg">
              <p className="text-white font-semibold text-lg">{program.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6">
        {[
          {
            label: "Strength Training",
            title: "Crush any strength program with our suite of strength equipment",
            description: [
              "Fully fitted powerlifting and strength section",
              "Olympic lifting platforms, weights, and bars",
              "Dumbbells ranging from 5lbs-120lbs",
            ],
            imgSrc: "https://s3-alpha-sig.figma.com/img/dea5/640f/d3ea7e7367b25ee5bfe510527e3776ac?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2i1JNrpkiM1ffmAOoruhPn7SO6biJqcXwtqApbbyx9Cz-Cpvfg6j0U~F3spVXgSsoHsNBw-DREwRpv9EWcIG9Mb4h9qWuWlwe8ESAKkN6ZXEVoVcHXOI90IGHfGSg-nGhnmgmD38OrBcAQASA5SVIKK01yxZde~EIXah8SgeOtLv6wVLZx4KJ3VTpITZTES75hpf~jy9XGk4P9eEJGg0i3ZOE080222kgRPamM0w9ruxQP5H0qYfMWltnJd2iFKn6vcW7VO3nVgdI5IIoKHYoT-JwUk4HUyDsnau7H0nxyQLFoeOV8PIIGM9m4i19RY5CiYxWULSIR~okHZ1Dzz4g__",
          },
          {
            label: "Group CrossFit Classes",
            title: "Get fit while having fun with our group CrossFit classes",
            description: [
              "Just 30 minutes long",
              "Warm-up & workout included",
              "Fun is guaranteed!",
            ],
            imgSrc: "https://s3-alpha-sig.figma.com/img/60ec/8cb9/1e6950c63475f795ed1d704ed3af61e8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cieRDP1yBtDE8wE01DNKOr9QznXtAzPPTlRaXdRNWWr-cpobaHs7rjrI1u937b7jIjXR1CBXA-vPhAPQu7faB-pfsJWl-2J4k6STLO-tAzAqqf4RpHYZR1~RiPEBgwPKUmkqEnDdtHnkyDhZQd52eZEET0vlql6bpDBMJsn-AGXBoVkNJeoyNszn50RL2fDL9POiQLVFuNcnCSHdj-FQ5E1Xku8TRn3ZmkD29CIkpC1nzwt9zBZOaKC9giJ0W1larxPs-nlFb0kn9uyZn3piq9ZDPIcVC2s8jpBYODXjA9Cjl~jj05kA48bHlnh~ti44iwTEVqJgZy0i4aBmPrGPSQ__",
          },
          {
            label: "Personal Training",
            title: "Be guided every step of the way with one of our world-class coaches",
            description: [
              "We have coaches in the following categories:",
              "Weightlifting",
              "Competitive CrossFit",
              "Powerlifting",
            ],
            imgSrc: "https://s3-alpha-sig.figma.com/img/58d8/dcb9/27851ee8c619b6ba8c17570508367cd3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xlc25PnD9ZnqblllxdUwy6K0CjpQiIDz3mmQzdOps2i-VO00WfqkQOD26IJA7MbyCnit8vVUZAbSsPjFaisGO78HqJTLFn~9AuYp1dK295YuqGegOvRJ7iAbeqNa1NPkUyHSUnM5hEwerqTjiRyNq9HmuDhWxkoUEP-ziiwLG0X~93pzQcBopmACNmbaI~jtYX6TJ6gg0oo11pxhzup5YQ4~a6kkeE90xB1W7OzsjE23lLbC8C6LU70uLTeOndaQxWR0MRkAZUyvTstBBOh9-uCaWJ8E7N~c0c9Y-MQ2OV-yd8fVXoELf9ALfMc93oS4vioHvzsbuZW~1lEpSpaBsw__",
          },
          {
            label: "Fun with Friends",
            title: "Make new friends and get competitive with fun member events",
            description: [
              "Friendly competition",
              "Monthly challenges",
              "Prizes and bragging rights",
            ],
            imgSrc: "https://s3-alpha-sig.figma.com/img/9e41/fda8/1e722ede3db285e5c52586907398962e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fzceVfPtkmCYp~1J12O2iBHg1p7kHeFNU1DV4WbysRf-oNOQh8lnNXayhSh0BD4dKidS0krva1iCOFiOhnV62huE5ybDElHbfdymJ76H1uNQBN62lFx0DamjLus4od8Z4osM-vBuV99WKzOo6uKL6IfZDODyXsC8JnMKadQVcKMXT8OYiChebtbmQ2uYyyO1Fw5x49lgq9o-4nsXWFve3cJe9oVHi-qWne5GcfoPF50oLffH5CltWhUdVQ3AttRVq~eYpwEe1DmVRl-jnpJskph8cpgDLkZm4nuC8ifX-iQqSld4OKTm5E~tqbg3EcIYtWp3nr~179VQZwtVYx0Xtw__",
          },
        ].map((program, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2">
              <span className="text-orange-500 text-sm font-semibold inline-block mb-2">
                {program.label}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">{program.title}</h3>
              <ul className="text-gray-600 space-y-2">
                {program.description.map((desc, descIndex) => (
                  <li key={descIndex} className="flex items-center">
                    <span className="text-orange-500 mr-2">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={program.imgSrc}
                alt={program.title}
                className="w-full object-cover h-96 rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleGym;
