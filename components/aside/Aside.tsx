"use client";
import { IconName, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";
import Card from "@/components/card/Card";

import {
  faCloudSunRain,
  faListUl,
  faMap,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";

const Aside = () => {
  const [active, setActive] = useState("/");

  const categories: { label: string; path: string; icon: IconName }[] = [
    { label: "weather", path: "/", icon: "cloud-sun-rain" },
    { label: "cities", path: "/search", icon: "list-ul" },
    { label: "map", path: "/map", icon: "map" },
    { label: "settings", path: "/settings", icon: "sliders-h" },
  ];
  library.add(faCloudSunRain, faListUl, faMap, faSlidersH);

  return (
    <Card className="flex-rows lg:flex-col lg:!justify-start z-10">
      <div className="hidden lg:flex flex-col justify-center items-center">
        <div className="w-12 h-12">
          <div
            className="w-full h-full opacity-100"
            style={{
              backgroundImage:
                'url("https://assets.api.uizard.io/api/cdn/stream/d0bb0968-406e-4014-b9ab-080788e9d44b.png")',
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>

      {categories.map((category, index) => (
        <Link
          key={index}
          href={category.path}
          className={`flex gap-2 lg:flex-col justify-center items-center lg:py-6 ${
            active === category.path ? "text-secondary-light" : "text-secondary"
          } `}
          onClick={() => setActive(category.path)}
          title={category.label}
        >
          <FontAwesomeIcon
            className="w-6 h-6"
            icon={`fa-solid fa-${category.icon}` as IconName}
          />

          <p className="hidden sm:block text-body capitalize">
            {category.label}
          </p>
        </Link>
      ))}
    </Card>
  );
};

export default Aside;
