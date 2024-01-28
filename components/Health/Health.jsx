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

      {health &&
        health?.map((item) => {
          return (
            <div
              key={item?._id}
              className="border px-7 py-4 bg-white rounded-sm mt-10"
            >
              <ul>
                <li className="text-xl mb-4 list-disc">
                  App Version: {item?.appVersion}
                </li>
                <li className="text-xl mb-4 list-disc">
                  Paper Level: {item?.paperLevel}
                </li>
                <li className="text-xl mb-4 list-disc">
                  Terminal Type: {item?.terminalType}
                </li>
                <li className="text-xl mb-4 list-disc">
                  Battery Level: {item?.batteryLevel}
                </li>
                <li className="text-xl mb-4 list-disc">Location: {item?.location}</li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default Health;
