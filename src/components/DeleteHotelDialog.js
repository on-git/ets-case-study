import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { StorageService } from "../services/StorageService";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";

import "../assets/listHotel/deletehotel.css";

const DeleteHotelDialog = (props) => {
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const storageService = new StorageService();

  const buttonSuccessStyle = () => {
    return deleteSuccess
      ? {
          backgroundColor: "green",
        }
      : null;
  };

  const handleDelete = () => {
    storageService.deleteHotel(props.hotelName);
    setDeleteSuccess(true);
    setTimeout(() => {
      props.onDeleteClicked();
    }, 2000);
  };
  const handleClose = () => {
    props.onCancelClicked();
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton={!deleteSuccess} style={{ border: "none" }}>
        <Modal.Title>Oteli Sil</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <b>{props.hotelName}</b>'i silmek istediğinizden emin misiniz?
      </Modal.Body>
      <Modal.Footer style={{ border: "none" }}>
        <Button
          variant="primary"
          onClick={handleDelete}
          disabled={deleteSuccess}
          style={Object.assign({ flex: "1" }, buttonSuccessStyle())}
        >
          <div className="deleteButtonLayout">
            {deleteSuccess && <BsCheckLg />}
            {deleteSuccess ? "SİLİNDİ" : "OTELİ SİL"}
          </div>
        </Button>
        <Button
          variant="outline-primary"
          onClick={handleClose}
          disabled={deleteSuccess}
          style={{ flex: "1" }}
        >
          VAZGEÇ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteHotelDialog;
