import AddHotelLayout from "../components/AddHotelLayout";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsArrowDownUp } from "react-icons/bs";
import HotelItem from "../components/HotelItem";
import { useEffect, useRef, useState } from "react";
import { StorageService } from "../services/StorageService";

import "../assets/listhotel.css";

const ListHotel = () => {
  const [hotelList, setHotelList] = useState(null);
  const storageService = new StorageService();

  const loadHotels = useRef(() => {
    const hotels = storageService.getHotels();
    if (hotels) {
      setHotelList(hotels);
    }
  });

  useEffect(() => {
    loadHotels.current();
  }, [loadHotels]);

  const onClickAction = () => {
    loadHotels.current();
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
        <Dropdown.Item href="#/action-1">Puan (Artan)</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Puan (Azalan)</Dropdown.Item>
      </DropdownButton>
      {hotelList &&
        hotelList.map((hotel, index) => {
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
