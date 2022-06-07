import { useState } from "react";
import Button from "react-bootstrap/Button";
import { BsFillXCircleFill } from "react-icons/bs";
import DeleteHotelDialog from "./DeleteHotelDialog";
import { StorageService } from "../services/StorageService";

import "../assets/listHotel/hotelitem.css";

const MAX_HOTEL_POINT = 10;
const MIN_HOTEL_POINT = 0;

const HotelItem = ({ hotelDetails, onUserAction }) => {
  const [displayDialog, setDisplayDialog] = useState(false);
  const [hotelPoint, setHotelPoint] = useState(hotelDetails.point);

  const storageService = new StorageService();

  const onDeleteClicked = () => {
    onUserAction();
    setDisplayDialog(false);
  };

  const onCancelClicked = () => {
    setDisplayDialog(false);
  };

  const increasePoint = () => {
    if (hotelPoint < MAX_HOTEL_POINT) {
      storageService.updateHotel(hotelDetails.name, hotelPoint + 1);
      setHotelPoint(hotelPoint + 1);
      onUserAction();
    }
  };

  const decreasePoint = () => {
    if (hotelPoint > MIN_HOTEL_POINT) {
      storageService.updateHotel(hotelDetails.name, hotelPoint - 1);
      setHotelPoint(hotelPoint - 1);
      onUserAction();
    }
  };

  return (
    <div className="itemLayout">
      <BsFillXCircleFill
        className="deleteHotelButton"
        onClick={() => setDisplayDialog(true)}
      />
      <div className="imageLayout">
        <img
          src="https://images.etstur.com/files/images/hotelImages/TR/51957/m/Titanic-Deluxe-Golf-Belek-Genel-300924.jpg"
          loading="lazy"
          alt="hotelImg"
        />
      </div>
      <div className="itemBody">
        <div>
          <h5>{hotelDetails.name}</h5>
          <span className="hotelPoint">{hotelPoint} Puan</span>
        </div>
        <div className="buttonLayout">
          <Button variant="outline-primary" onClick={() => increasePoint()}>
            PUAN ARTIR
          </Button>
          <Button variant="outline-primary" onClick={() => decreasePoint()}>
            PUAN AZALT
          </Button>
        </div>
      </div>
      {displayDialog && (
        <DeleteHotelDialog
          hotelName={hotelDetails.name}
          onDeleteClicked={onDeleteClicked}
          onCancelClicked={onCancelClicked}
        />
      )}
    </div>
  );
};

export default HotelItem;
