"use client";

import CountUp from "react-countup";

const stats = [
  { label: "Projects", value: 15 },
  { label: "Clients", value: 100 },
  { label: "Certifications", value: 20 },
  { label: "Skills", value: 80 },
  { label: "Languages", value: 6 },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-5 xl:pb-0 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start "
              >
                <CountUp
                  end={item.value}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.label.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
