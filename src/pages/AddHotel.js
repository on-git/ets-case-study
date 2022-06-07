import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { StorageService } from "../services/StorageService";
import { useNavigate } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../assets/addhotel.css";

const AddHotel = () => {
  const [saveSuccess, setSaveSuccess] = useState(false);
  const storageService = new StorageService();
  const navigate = useNavigate();

  const buttonSuccessStyle = () => {
    return saveSuccess
      ? {
          width: "150px",
          backgroundColor: "green",
        }
      : null;
  };

  const saveHotel = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    let newDate = new Date();
    const hotelItem = {
      id: newDate.getTime(),
      name: form.name.value,
      point: 5,
      updatedTime: newDate.toISOString(),
    };
    storageService.addHotel(hotelItem);
    setSaveSuccess(true);
    setTimeout(() => {
      navigate("../", { replace: true });
    }, 2000);
  };

  return (
    <div className="newHotelLayout">
      <Link to="/" style={{ width: "fit-content", textDecoration: "none" }}>
        <Button
          variant="outline-primary"
          style={{
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <BsArrowLeft />
          <span>Listeye Geri Dön</span>
        </Button>
      </Link>
      <Form style={{ width: "inherit" }} onSubmit={saveHotel}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Otel Adı</Form.Label>
          <Form.Control type="text" placeholder="Otel" required />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          size="lg"
          disabled={saveSuccess}
          style={buttonSuccessStyle()}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {saveSuccess && <BsCheckLg />}
            {saveSuccess ? "EKLENDİ" : "EKLE"}
          </div>
        </Button>
      </Form>
    </div>
  );
};

export default AddHotel;
