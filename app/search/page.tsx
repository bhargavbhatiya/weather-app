"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import DetailCity from "./detail/DetailCity";
import SearchItem from "./searchItem/SearchItem";

const Search = () => {
  const { cityList } = useSelector((state: RootState) => state.geoSlice);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 md:col-span-8">
        {cityList.length === 0 ? (
          <div className="flex flex-col my-5 justify-center items-center">
            <span className="flex justify-center text-headline text-secondary pb-3">
              {" "}
              X__X{" "}
            </span>
            <span className="text-secondary-white flex justify-center text-subHeadline">
              Type to search cities
            </span>
          </div>
        ) : (
          cityList.map((item) => <SearchItem key={item.id} item={item} />)
        )}
      </div>

      <div className="hidden md:block col-span-4">
        <DetailCity />
      </div>
    </div>
  );
};

export default Search;
