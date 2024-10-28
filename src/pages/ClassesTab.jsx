import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ClassesTab = () => {
  const data = [
    {
      name: "High-Intensity Training",
      image: "class1.png",
    },
    {
      name: "Weight Lifting",
      image: "class2.png",
    },
    {
      name: "Cardio",
      image: "class3.png",
    },
    {
      name: "Cross Fit",
      image: "class4.png",
    },
    {
      name: "Legs",
      image: "class5.png",
    },
    {
      name: "Yoga",
      image: "class6.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-bg_color lg:max-w-screen-2xl max-w-screen-lg mx-auto my-20 lg:px-0 px-3">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-3">
          {data?.map((item, i) => (
            <div
              key={i}
              className="card flex flex-col gap-3 p-2 cursor-pointer group"
            >
              <div className="overflow-hidden transition-all">
                <img
                  src={`/images/${item?.image}`}
                  className="w-full min-h-44 max-h-52 group-hover:scale-105 transition-all"
                  alt={item?.name}
                />
              </div>
              <h1 className="font-semibold text-2xl">{item?.name}</h1>
              <p className="line-clamp-2 text-ellipsis w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt error doloribus magni fuga esse pariatur sapiente
                aliquam rerum. Odit, inventore maiores. Et doloribus nemo
                laborum quas quisquam suscipit! Voluptatibus consequatur ut
                assumenda repellat dolorem.
              </p>
              <p className="group-hover:text-primary_color transition-all w-max cursor-pointer">
                <span className="font-medium group-hover:underline">
                  Class Information
                </span>
                <span className="mdi mdi-chevron-right font-medium"></span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClassesTab;
