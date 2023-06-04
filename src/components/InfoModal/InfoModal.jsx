import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ContactsModal from "../ContactsModal/ContactsModal";
import { Form } from "react-bootstrap";

const InfoModal = ({
  show,
  setShow,
  handleClose,
  handleShow,
  contacts,
  area,
}) => {
  const [contacts2, setContacts2] = useState([]);
  const [area2, setArea2] = useState("");

  const [show2, setShow2] = useState(false);
  const [onlyEven, setOnlyEven] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const handleSubmit2 = (para) => {
    if (para === "us-contacts") {
      fetch(
        "https://contact.mediusware.com/api/country-contacts/United%20States/?page=1"
      )
        .then((res) => res.json())
        .then((data) => {
          setContacts2(data.results);
          handleShow2();
        });
      setArea2("United States Contacts");
      return;
    }
    fetch(`https://contact.mediusware.com/api/contacts/`)
      .then((res) => res.json())
      .then((data) => {
        setContacts2(data.results);
        handleShow2();
      });
    setArea2("All Contacts");
  };

  const handleCheckboxChange = () => {
    setOnlyEven(prevOnlyEven => !prevOnlyEven); // Toggle checkbox value
  
    const filteredContacts = contacts2.filter(contact => contact.id % 2 === 0);
  
    console.log(filteredContacts); // Log filtered contacts
  };
  
  
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {area === "All Contacts" ? "Modal A" : "Modal B"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            onClick={() => handleSubmit2("all-contacts")}
            style={{ backgroundColor: "#46139f" }}
          >
            All Contacts
          </Button>

          <Button
            onClick={() => handleSubmit2("us-contacts")}
            style={{ backgroundColor: "#ff7f50", margin: "10px" }}
          >
            US Contacts
          </Button>

          <Button
            style={{
              border: "2px solid #46139f",
              backgroundColor: "white",
              color: "black",
            }}
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <ContactsModal
            hello={{
              show2,
              setShow2,
              handleClose2,
              handleShow2,
              area2,
              contacts2,
            }}
          ></ContactsModal>
        </Modal.Body>
        <Modal.Footer>
          <Form.Check
          style={{ marginRight:'370px' }} 
            type="checkbox"
            id="onlyEvenCheckbox"
            label="Only Even"
            checked={onlyEven}
            onChange={handleCheckboxChange}
          />
          {/* <Button style={{ marginRight:'370px' }} variant="primary">Only Even</Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InfoModal;
