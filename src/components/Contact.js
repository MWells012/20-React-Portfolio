import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EmailValidator } from '../components/regexValidator'
import emailjs from '@emailjs/browser';


const Contact =() =>{

    const [formState, setFormState] = useState({email: '', name: '', message: ''});
    const [contactMessage, setContactMessage]= useState('');

    function handleForm(e) {
        if (e.target.name === 'email'){
            const validEmail = EmailValidator(e.target.value);
            if(!validEmail){
                setContactMessage('Please Enter A Valid Email');
            }else{
                setContactMessage('');
            }
        }else{
            if(!e.target.value.length){
                const name = e.target.name;
                setContactMessage(`${name.charAt(0).toUpperCase()+ name.slice(1)} cannot be blank`)
            }
        }

        if(!contactMessage){
            setFormState({ ...formState, [e.target.name]: e.target.value})
        }
    }
    const form = useRef();





    function emailSender(e){
        e.preventDefault();

        emailjs.sendForm('service_akmkf5k', 'template_o0bt4fg', form.current, 'wyQyYUHHinzhE6j1S' )
        .then((response) =>{
            setContactMessage('Your email was sent!');
        }, (error) => {
            setContactMessage('Hmm we are having some trouble, wanna check your email address for me?');
        })
    }




    
    return(
        <React.Fragment>
            <div>
                <h1 style={{marginTop: '50px', textAlign: 'center', color:'white'}}> Send Me and Email </h1>
                <hr style={{height:'3px',color: 'white',backgroundColor: 'white',width: '60%',marginLeft: 'auto',marginRight: 'auto',}}/>
            </div>
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '30rem', height: '35rem', margin: 'auto', marginTop: '100px' }}>
                            <Card.Body>
                                <Form onSubmit={emailSender} ref={form}> 
                                    <Form.Group className="p-2 mb-3" controlId="name">
                                        <Form.Label>Name</Form.Label>
                                            <Form.Control 
                                                type="text"
                                                placeholder="Your Name"
                                                required name="name" 
                                                onBlur={handleForm}
                                            />
                                        </Form.Group>


                                        <Form.Group className="p-2 mb-3" controlId="formBasicEmail">
                                        <Form.Label >Email address</Form.Label>
                                        <Form.Control
                                            required name="email"
                                        type="email" 
                                        placeholder="Enter email"
                                        onBlur={handleForm}
                                        />
                                        <Form.Text className="text-muted"></Form.Text>
                                    </Form.Group>


                                    <Form.Group className="p-2 mb-3" controlId="message">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            required name="message"
                                            type="text"
                                            placeholder="Type Your Message"
                                            as="textarea"
                                            rows={4}
                                            onBlur={handleForm} 
                                        ></Form.Control>
                                    </Form.Group>
                                    

                                    {contactMessage && <p >{contactMessage}</p>}

                                    <Button style={{backgroundColor: '#282c34', borderColor:'#282c34', marginLeft: '160px', marginTop: '40px', textColor:'white'}} type="submit" size="lg">
                                        Send!
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    
                </Row>
            </Container>
      </React.Fragment>
    )
}

export default Contact;