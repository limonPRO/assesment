import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ContactDetailsModal from "../ContactDetailsModal/ContactDetailsModal";

const ContactsModal = ({ hello }) => {
  const {
    show2,
    setShow2,
    handleClose2,
    handleShow2,
    area2,
    contacts2,
    filteredContacts,
  } = hello;
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleCloseContactModal = () => {
    setSelectedContact(null);
  };

  console.log(area2);
  const textColor = area2 == "All Contacts" ? "#46139f" : "#ff7f50";

  return (
    <div>
      <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: textColor }}>{area2}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {contacts2.map((contact, index) => (
            <p  style={{ cursor: "pointer" }} key={index} onClick={() => handleContactClick(contact)}>
              {contact.phone}
            </p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {selectedContact && (
        <ContactDetailsModal
          contact={selectedContact}
          handleClose={handleCloseContactModal}
        />
      )}
    </div>
  );
};

export default ContactsModal;
