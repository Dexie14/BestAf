"use client";
import React from "react";

import { useGetingHealth } from "@/hooks/useHealthGet";

const Health = () => {
  const { data: health } = useGetingHealth();

  console.log(health, "ddd");
  return (
    <div className="h-[100%]">
      <section className="flex justify-between">
        <h1 className="text-2xl text-dark" style={{ fontFamily: "DMSans" }}>
          Health Overview
        </h1>
      </section>

      <div className="border border-primary px-7 py-4 bg-white rounded-lg mt-10">
        <h1 className="text-dark mb-5 text-2xl">The health information is provided below</h1>
        {health &&
          health?.map((item) => {
            return (
              <div key={item?._id}>
                <ul>
                  <li className="text-xl mb-4 mr-3 list-disc">
                    App Version: <span className="text-base text-dark">{item?.appVersion}</span>
                  </li>
                  <hr className="border border-primary mb-4"/>
                  <li className="text-xl mb-4 mr-3 list-disc">
                    Paper Level: <span className="text-base text-dark">{item?.paperLevel}</span>
                  </li>
                  <hr className="border border-primary mb-4"/>
                  <li className="text-xl mb-4 mr-3 list-disc">
                    Terminal Type: <span className="text-base text-dark">{item?.terminalType}</span>
                  </li>
                  <hr className="border border-primary mb-4"/>
                  <li className="text-xl mb-4 mr-3 list-disc">
                    Battery Level: <span className="text-base text-dark">{item?.batteryLevel}</span>
                  </li>
                  <hr className="border border-primary mb-4"/>
                  <li className="text-xl mb-4  mr-3 list-disc">
                    Location: <span className="text-base text-dark">{item?.location}</span>
                  </li>
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Health;
