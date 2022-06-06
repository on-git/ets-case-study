import AddHotelLayout from "../components/AddHotelLayout";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsArrowDownUp } from "react-icons/bs";
import HotelItem from "../components/HotelItem";
import { useEffect, useState } from "react";
import { StorageService } from "../services/StorageService";

import "../assets/listhotel.css";

const ListHotel = () => {
  const [hotelList, setHotelList] = useState(null);
  const [sortType, setSortType] = useState("");
  const storageService = new StorageService();

  const loadHotels = () => {
    const hotels = storageService.getHotels();
    if (hotels) {
      switch (sortType) {
        case "increasing":
          sortIncreasing(hotels);
          break;
        case "decreasing":
          sortDecreasing(hotels);
          break;
        default:
          setHotelList(hotels);
      }
    }
  };

  useEffect(() => {
    loadHotels();
  }, []);

  const onClickAction = () => {
    loadHotels();
  };

  const sortIncreasing = (hotelList) => {
    setSortType("increasing");
    let hotels = [...hotelList];
    hotels.sort(function (currHotel, nextHotel) {
      if (currHotel.point === nextHotel.point) {
        return nextHotel.updatedTime > currHotel.updatedTime;
      } else {
        return currHotel.point > nextHotel.point;
      }
    });
    setHotelList(hotels);
  };

  const sortDecreasing = (hotelList) => {
    setSortType("decreasing");
    let hotels = [...hotelList];
    hotels.sort(function (currHotel, nextHotel) {
      if (currHotel.point === nextHotel.point) {
        return nextHotel.updatedTime > currHotel.updatedTime;
      } else {
        return nextHotel.point > currHotel.point;
      }
    });
    setHotelList(hotels);
  };

  const titleTemplate = (
    <div className="dropdownTitle">
      <BsArrowDownUp />
      <span>Sıralama</span>
    </div>
  );

  return (
    <div className="listLayout">
      <AddHotelLayout />
      <DropdownButton id="dropdown-basic-button" title={titleTemplate}>
        <Dropdown.Item as="button" onClick={() => sortIncreasing(hotelList)}>
          Puan (Artan)
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => sortDecreasing(hotelList)}>
          Puan (Azalan)
        </Dropdown.Item>
      </DropdownButton>
      {hotelList &&
        hotelList.map((hotel) => {
          return (
            <HotelItem
              key={hotel.id}
              hotelDetails={hotel}
              onClickAction={onClickAction}
            />
          );
        })}
    </div>
  );
};

export default ListHotel;
