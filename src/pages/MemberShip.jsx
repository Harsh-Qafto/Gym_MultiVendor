import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MemberShip = () => {
  const data = [
    {
      name: "Month to Month",
      price: "1000",
      activites: [
        "Monthly goal tracking",
        "Custom training with Diet plans ",
        "Full gym access",
        "All Fun activity",
      ],
    },
    {
      name: "6 Months Membership",
      price: "900",
      activites: [
        "Monthly goal tracking",
        "Custom training with Diet plans",
        "Full gym access",
        "All Fun activity",
      ],
    },
    {
      name: "1 Year Membership",
      price: "800",
      activites: [
        "Monthly goal tracking",
        "Custom training with Diet plans",
        "Full gym access",
        "All Fun activity",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full bg-primary_color my-20">
        <div className="lg:max-w-screen-2xl max-w-screen-lg mx-auto xl:px-0 px-3 py-7">
          <h1 className="lg:text-4xl sm:text-3xl text-xl font-extrabold text-white mx-auto lg:w-1/2 md:w-3/4 mb-10 h-20 text-ellipsis overflow-hidden sm:line-clamp-2 line-clamp-3">
            Crushing your health and fitness goals starts here Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Corporis quo consequatur
            repellat! Non numquam perferendis ex repellendus? Beatae eos illo,
            nobis adipisci sit tempora fuga fugiat. Recusandae commodi, soluta
            saepe nisi laudantium ex id?
          </h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3 lg:w-11/12 md:w-full w-11/12 mx-auto">
            {data?.map((item, i) => (
              <div
                key={i}
                className="card rounded bg-bg_color py-3 flex flex-col gap-3 text-center"
              >
                <div className="px-3 flex flex-col gap-3">
                  <h1 className="lg:text-4xl text-3xl font-semibold mx-auto lg:w-3/4 w-4/5 h-20 text-ellipsis line-clamp-2">
                    {item?.name}
                  </h1>
                  <p>
                    <span className="text-primary_color text-xl font-medium">
                      ₹{item?.price}
                    </span>
                    /month
                  </p>
                  <p className="text-sm">One Time Payment</p>
                </div>
                <hr />

                <div className="px-3 flex flex-col gap-3 mb-4 w-full">
                  <p className="mb-2 font-semibold">Benefits of this plan</p>

                  <div className="w-3/4 mx-auto">
                    {item?.activites?.map((act, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <span class="mdi mdi-check-circle-outline  text-primary_color"></span>
                        <p className="truncate">{act}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mx-3">
                  <p className="text-gray-400 mb-3">
                    Charges every month unless you cancel
                  </p>
                  <button className="rounded border border-primary_color bg-bg_color text-primary_color font-medium py-2 px-2 w-full">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemberShip;
