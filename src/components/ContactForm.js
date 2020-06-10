import React, {useState} from 'react';
import {Form, Input, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

const ContactForm = ({modalOpen, toggle}) => {
    const [status, setStatus] = useState('');

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if(xhr.readyState !== XMLHttpRequest.DONE) return;
            if(xhr.status === 200) {
                form. reset();
            }
        }
        xhr.send(data);
    }
    return (
        <Modal isOpen={modalOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Contact Me</ModalHeader>
            <ModalBody><Form onSubmit={() => handleForm()} action="https://formspree.io/xgenyvdl" method="POST">
                <Input type="email" name="email" placeholder="Email" required/>
                <Input type="text" name="subject" placeholder="Subject" required/>
                <Input type="textarea" name="message" placeholder="Message" required/>
                <Button color="primary" block>Submit</Button>
            </Form></ModalBody>
        </Modal>
    )
}

export default ContactForm;