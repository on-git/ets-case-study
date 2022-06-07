import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";

import "../assets/listHotel/addhotelbutton.css";

const AddHotelLayout = () => {
  return (
    <div className="addHotelButtonLayout">
      <Link to="/addhotel">
        <Button variant="outline-primary" style={{ verticalAlign: "inherit" }}>
          <BsPlusLg style={{ verticalAlign: "inherit" }} />
        </Button>
      </Link>
      <span className="addHotelTitle">OTEL EKLE</span>
    </div>
  );
};

export default AddHotelLayout;
