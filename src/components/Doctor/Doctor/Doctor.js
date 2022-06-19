import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = () => {
    const { doctorId } = useParams();
    const [singleDoctor, setsingleDoctor] = useState([]);

    useEffect(() => {
        fetch("https://mocki.io/v1/a76412a7-6184-450f-9723-db597e74d0bc") /* doctor.json fake data host in www.mocki.io and create a api url if it dose not work you can be use-(doctor.json) */
            .then(res => res.json())
            .then(data => setsingleDoctor(data))
    }, [])
    const find = singleDoctor.find((singleDoctor) => singleDoctor.id === doctorId);
    // console.log(find, singleDoctor);
    const { name, img, title, description } = find || {};
    // console.log(name, title)
    return (
        <div>
            <div className="bg-light py-4">
                <h3 className="text-center text-primary mt-0">{title}</h3>
                <Card className="card">
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="bg-secondary text-light">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Link to="/home">
                            <Button variant="primary">Go Back</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Doctor;