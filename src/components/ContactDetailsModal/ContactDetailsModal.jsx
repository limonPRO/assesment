import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ContactDetailsModal = ({ contact, handleClose }) => {

  console.log(contact);
  const { country } = contact;
  const countryName = country ? country.name : "";

  return (
    <Modal show={true} onHide={handleClose} style={{backgroundColor: "#46139f"}}>
      <Modal.Header closeButton  >
        <Modal.Title>Modal C</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Name: {countryName}</p>
        <p>Phone: {contact.phone}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactDetailsModal