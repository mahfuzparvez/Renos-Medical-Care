import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import "./About.css";

const About = () => {
    const formClear = (e) => {
        e.preventDefault();
        alert('Your Contact From Submitted');
        const inputs = document.querySelectorAll('#input');
        inputs.forEach(input => {
            input.value = '';
        });
    }
    return (
        <div>
            <h2 className='text-info my-4'>Contact our branch for an appointment or more details</h2>
            <div className='container mt-4' id="inputField">
                <div id="imageSection">
                    <img id="img" src="https://i.postimg.cc/WzrBWB89/2488304.jpg" alt="" />
                </div>
                <div className='w-75 my-4 ms-5'>
                    <form onSubmit={formClear}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">Name:</InputGroup.Text>
                            <FormControl
                                id='input'
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <br />
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">Address:</InputGroup.Text>
                            <FormControl
                                id='input'
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <br />
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">Phone:</InputGroup.Text>
                            <FormControl
                                id='input'
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <br />
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">Health Problem:</InputGroup.Text>
                            <FormControl
                                id='input'
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <br />
                        <InputGroup size="lg">
                            <InputGroup.Text id="inputGroup-sizing-lg">Your Massage:</InputGroup.Text>
                            <FormControl id='input' as="textarea" rows={3} />
                        </InputGroup>
                        <Button className="mt-4 w-50" type="submit" varrinte="info"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                        </svg> Send</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default About;