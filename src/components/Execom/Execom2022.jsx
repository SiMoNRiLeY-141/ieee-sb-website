import React from "react";

const EXECOM_2022_PICS = [
  {
    title: "Student Branch Executive Committee",
    img: "/images/Execom22/exc22SB.webp"
  },
  {
    title: "Computer Society & Industry Applications Society",
    img: "/images/Execom22/exc22CsIAs.webp"
  },
  {
    title: "Communications Society & Women In Engineering",
    img: "/images/Execom22/exc22WigCOMS.webp"
  }
];

const Execom2022 = () => {
  return (
    <div className="w-full flex flex-col gap-10 max-w-4xl animate-in fade-in duration-300">
      {EXECOM_2022_PICS.map((pic, idx) => (
        <div
          key={idx}
          className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50 shadow-sm p-4 text-center"
        >
          <h3 className="text-slate-700 font-semibold text-sm md:text-base tracking-wider uppercase font-monument mb-4">
            {pic.title}
          </h3>
          <img
            src={pic.img}
            alt={pic.title}
            className="w-full rounded-lg shadow-sm object-contain max-h-[500px] bg-white border border-slate-200/50"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/800x500?text=" + pic.title;
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Execom2022;
