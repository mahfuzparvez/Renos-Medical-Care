import React from 'react';
import { Button, Card, CardGroup, Carousel } from 'react-bootstrap';

const Service = () => {
    return (
        <div>
            <div> {/* service section */}
                <h2 className='my-4 text-primary'>OUR SERVICE</h2>
                <CardGroup className='serviceCard container'>
                    <Card>
                        <Carousel style={{ height: "250px" }}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.postimg.cc/6qwHpJ64/DERMATOLOGIST1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.postimg.cc/W4Tt8546/DERMATOLOGIST2.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.postimg.cc/B6NFHdcK/DERMATOLOGIST3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <Card.Body>
                            <Card.Title>DERMATOLOGIST</Card.Title>
                            <Card.Text>
                                A dermatologist is a doctor who specializes in conditions involving the skin, hair, and nails. A dermatologist can identify and treat more than 3,000 conditions. These conditions include eczema, psoriasis, and skin cancer, among many others. The skin is an incredible organ.
                            </Card.Text>
                        </Card.Body>
                        <Button className="btn btn-info my-2 w-50 mx-auto">Details</Button>
                    </Card>
                    <Card className="mx-4">
                        <Carousel style={{ height: "250px" }}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100" height="242"
                                    src="https://i.postimg.cc/8PYhyg8d/surgery1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.postimg.cc/6Qp4wHN6/surgery2.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.postimg.cc/7hVKCsbs/surgery3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <Card.Body>
                            <Card.Title>SURGERY</Card.Title>
                            <Card.Text>
                                Surgeries can be done to diagnose or treat disease or injury. In the operating room, surgeons lead a team of other doctors and nurses to make sure that a procedure goes smoothly. Surgeons use instruments to change or move live tissue, including: Lasers.
                            </Card.Text>
                        </Card.Body>
                        <Button className="btn btn-info my-2 w-50 mx-auto">Details</Button>
                    </Card>
                    <Card>
                        <Carousel style={{ height: "250px" }}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://i.postimg.cc/7L0MGsW3/therapy1.jpg"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100" height="243"
                                    src="https://i.postimg.cc/dQmHS1n2/therapy2.jpg"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100" height="244"
                                    src="https://i.postimg.cc/mZwjyn2V/therapy3.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <Card.Body>
                            <Card.Title>THERAPY</Card.Title>
                            <Card.Text>
                                Therapy is a way to get help with a mental health problem or get extra support if you are going through a tough time. If you go to therapy, you'll have meetings with a therapist to talk and learn. You'll learn skills to cope, feel better, and get help with the problem you're having.
                            </Card.Text>
                        </Card.Body>
                        <Button className="btn btn-info my-2 w-50 mx-auto">Details</Button>
                    </Card>
                </CardGroup>
            </div>
        </div>
    );
};

export default Service;