import axios from "axios";
import React, { useState } from 'react';
import { Modal } from "react-bootstrap";


const AddCard = () => {



    
    return (  
        <>
            <button type="button" onClick = {handleShow} className="btn btn-dark">New Flashcard</button>   
            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Flashcard Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className = 'mb-3'>
                        <Form.Group className = 'mb-3' >
                            <Form.Label> Word</Form.Label>
                            <Form.Control type = 'string' value = {title} onChange = {(event)=> setTitle(event.target.value)}/> 
                        </Form.Group>
                        <Form.Group className = 'mb-3' >
                            <Form.Label> Definition</Form.Label>
                            <Form.Control type = 'string' value = {album} onChange = {(event)=> setAlbum(event.target.value)}/> 
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button varriant = 'secondary' onClick ={handleClose} className="btn btn-dark">Cancel</button>
                    <button type = 'submit' varriant = 'primary' onClick = {handleSubmit} className="btn btn-dark">Add FlashCard</button>
                </Modal.Footer>
            </Modal>
        </>
        
     );
}
 
export default AddCard;