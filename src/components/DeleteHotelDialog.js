import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { StorageService } from "../services/StorageService";

const DeleteHotelDialog = (props) => {
  const storageService = new StorageService();

  const handleDelete = () => {
    storageService.deleteHotel(props.hotelName);
    props.onDeleteClicked();
  };
  const handleClose = () => {
    props.onCancelClicked();
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton style={{ border: "none" }}>
        <Modal.Title>Oteli Sil</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <b>{props.hotelName}</b>'i silmek istediğinizden emin misiniz?
      </Modal.Body>
      <Modal.Footer style={{ border: "none" }}>
        <Button variant="primary" onClick={handleDelete} style={{ flex: "1" }}>
          OTELİ SİL
        </Button>
        <Button
          variant="outline-primary"
          onClick={handleClose}
          style={{ flex: "1" }}
        >
          VAZGEÇ
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteHotelDialog;
