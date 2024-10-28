import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FilterPage = () => {
  const data = [
    {
      name: "Anytime Fitness Club, Chandigarh.",
      address: "35 Sector Chandigarh.",
      seats: "17 Seats left",
      price: "₹999 Monthly",
      activites: [
        "Gym | Cardio | Weight Training",
        "AI driven Workout plan.",
        "Group Class Access",
      ],
    },
    {
      name: "Anytime Fitness Club, Chandigarh.",
      address: "35 Sector Chandigarh.",
      seats: "17 Seats left",
      price: "₹999 Monthly",
      activites: [
        "Gym | Cardio | Weight Training",
        "AI driven Workout plan.",
        "Group Class Access",
      ],
    },
    {
      name: "Anytime Fitness Club, Chandigarh.",
      address: "35 Sector Chandigarh.",
      seats: "17 Seats left",
      price: "₹999 Monthly",
      activites: [
        "Gym | Cardio | Weight Training",
        "AI driven Workout plan.",
        "Group Class Access",
      ],
    },
    {
      name: "Anytime Fitness Club, Chandigarh.",
      address: "35 Sector Chandigarh.",
      seats: "17 Seats left",
      price: "₹999 Monthly",
      activites: [
        "Gym | Cardio | Weight Training",
        "AI driven Workout plan.",
        "Group Class Access",
      ],
    },
    {
      name: "Anytime Fitness Club, Chandigarh.",
      address: "35 Sector Chandigarh.",
      seats: "17 Seats left",
      price: "₹999 Monthly",
      activites: [
        "Gym | Cardio | Weight Training",
        "AI driven Workout plan.",
        "Group Class Access",
      ],
    },
    {
      name: "Anytime Fitness Club, Chandigarh.",
      address: "35 Sector Chandigarh.",
      seats: "17 Seats left",
      price: "₹999 Monthly",
      activites: [
        "Gym | Cardio | Weight Training",
        "AI driven Workout plan.",
        "Group Class Access",
      ],
    },
  ];

  const filters = [
    {
      name: "Brand",
      attributes: [
        "Anytime Fitness",
        "WTF Gym",
        "Plus Fitness 24/7",
        "Headphones",
        "Skale Fitness",
        "Phoenix Fitness",
      ],
    },
    {
      name: "Amenities",
      attributes: [
        "Locker Rooms",
        "Modern Equipment's",
        "Gym Flower",
        "skilled trainer",
        "Shower",
        "More",
      ],
    },
    {
      name: "Rating",
      attributes: ["High", "Medium", "Low"],
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <Navbar />
      <div className="bg-bg_color lg:max-w-screen-2xl max-w-screen-lg mx-auto my-20 lg:px-0 px-3">
        <div className="flex gap-5 lg:justify-between overflow-hidden">
          <div className="w-1/4 lg:block hidden bg-secondary_color h-max sticky top-20 px-4 py-3 transition-all duration-150">
            <div className="flex flex-col gap-2 ">
              <div className="flex items-center gap-1 rounded shadow-lg bg-bg_color text-gray-600 w-full py-2 px-2 mb-4">
                <span className="mdi mdi-magnify text-lg"></span>
                <input
                  type="text"
                  placeholder="Search Gym name"
                  className="outline-none border-none bg-transparent w-full"
                />
              </div>

              <div className="">
                {filters?.map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 mb-4 last:mb-0">
                    <div className="flex items-center gap-2 justify-between">
                      <p className="text-primary_color font-medium">
                        {item?.name}
                      </p>
                      <p className="mdi mdi-chevron-down text-xl cursor-pointer"></p>
                    </div>

                    {item?.attributes?.map((attr, j) => (
                      <div key={j} className="">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            id={attr}
                            className="accent-primary_color cursor-pointer h-4 w-4"
                          />
                          <label
                            htmlFor={attr}
                            className="text-lg cursor-pointer break-words"
                          >
                            {attr}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/4 w-full">
            <div className="flex items-start gap-2">
              <div className="lg:hidden block">
                <button className="mdi mdi-menu rounded bg-secondary_color shadow py-1 px-2 cursor-pointer"></button>
              </div>
              <h1 className="font-bold sm:text-4xl text-2xl mb-5">
                Recommended for you
              </h1>
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              {data?.map((item, i) => (
                <div
                  key={i}
                  className="card bg-secondary_color rounded py-3 sm:pl-2 sm:pr-3 grid 2xl:grid-cols-2 gap-3 hover:cursor-pointer transition-all hover:scale-95 hover:shadow-lg"
                >
                  <div className="flex flex-col gap-1">
                    <div className="overflow-hidden">
                      <img
                        className="w-[95%] min-h-32 max-h-56"
                        src="/images/image.png"
                        alt="main"
                      />
                    </div>

                    <div className="w-full max-h-28 overflow-hidden">
                      <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        itemClass="carousel-item-padding-40-px px-2"
                      >
                        <img
                          src="/images/mini1.png"
                          className="object-contain"
                        />
                        <img
                          src="/images/mini2.png"
                          className="object-contain"
                        />
                      </Carousel>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 flex-col w-full">
                    <h1 className="sm:text-2xl font-semibold">{item?.name}</h1>
                    <div className="flex items-center">
                      <span class="mdi mdi-map-marker-outline text-primary_color"></span>
                      <p>{item?.address}</p>
                    </div>
                    <div className="flex flex-col items-start">
                      <p className="font-semibold">Activities Available</p>
                      {item?.activites?.map((act, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 text-gray-500"
                        >
                          <span class="mdi mdi-check-circle-outline "></span>
                          <p>{act}</p>
                        </div>
                      ))}
                    </div>
                    <p className="underline underline-offset-2 cursor-pointer transition-all hover:text-primary_color">
                      Seen More
                    </p>
                    <div className="flex items-center gap-1 justify-between text-primary_color w-full sm:text-base text-sm">
                      <p className="font-medium">{item?.seats}</p>
                      <button className="sm:border-2 border border-primary_color rounded py-2 px-2 font-medium w-max transition-all hover:bg-primary_color hover:text-white">
                        {item?.price}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FilterPage;
