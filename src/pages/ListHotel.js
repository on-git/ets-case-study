import AddHotelLayout from "../components/AddHotelLayout";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsArrowDownUp } from "react-icons/bs";
import HotelItem from "../components/HotelItem";
import { useEffect, useState } from "react";
import { StorageService } from "../services/StorageService";
import Pagination from "react-bootstrap-4-pagination";
import { sortIncreasing, sortDecreasing } from "../utils/sortFunctions";

import "../assets/listHotel/listhotel.css";

const ListHotel = () => {
  const [displayedHotelList, setDisplayedHotelList] = useState(null);
  const [sortType, setSortType] = useState("");
  const [paginationConf, setPaginationConf] = useState({});

  const storageService = new StorageService();

  const loadHotels = () => {
    const hotels = storageService.getHotels();
    let hotelList = [...hotels];
    if (hotels) {
      switch (sortType) {
        case "Artan":
          hotelList = sortIncreasing(hotelList);
          break;
        case "Azalan":
          hotelList = sortDecreasing(hotelList);
          break;
        default:
      }
    }
    loadPagination(hotelList);
  };

  const loadPagination = (hotels) => {
    let paginationConfig = {
      totalPages: Math.ceil(hotels.length / 5) || 1,
      currentPage: 1,
      showMax: 5,
      size: "lg",
      threeDots: true,
      prevNext: true,
      onClick: function (page) {
        let offset = 5 * (page - 1);
        const filteredHotels = hotels.slice(offset, offset + 5);
        setPaginationConf((prevState) => {
          return { ...prevState, currentPage: parseInt(page) };
        });
        setDisplayedHotelList(filteredHotels);
      },
    };
    setPaginationConf(paginationConfig);
    setDisplayedHotelList(hotels.slice(0, 5));
  };

  useEffect(() => {
    loadHotels();
  }, [sortType]);

  const onUserAction = () => {
    loadHotels();
  };

  const titleTemplate = (
    <div className="dropdownTitle">
      <BsArrowDownUp />
      <span>{sortType === "" ? "Sıralama" : sortType}</span>
    </div>
  );

  return (
    <div className="listLayout">
      <AddHotelLayout />
      <DropdownButton id="dropdown-basic-button" title={titleTemplate}>
        <Dropdown.Item
          as="button"
          active={sortType === "Artan"}
          onClick={() => setSortType("Artan")}
        >
          Puan (Artan)
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          active={sortType === "Azalan"}
          onClick={() => setSortType("Azalan")}
        >
          Puan (Azalan)
        </Dropdown.Item>
      </DropdownButton>
      {displayedHotelList &&
        displayedHotelList.map((hotel) => {
          return (
            <HotelItem
              key={hotel.id}
              hotelDetails={hotel}
              onUserAction={onUserAction}
            />
          );
        })}
      <div className="paginationLayout">
        <Pagination {...paginationConf} />
      </div>
    </div>
  );
};

export default ListHotel;
