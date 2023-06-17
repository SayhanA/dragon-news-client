import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitch, FaInstagram } from 'react-icons/fa';
import QZoon from '../QZoon/QZoon';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitch />twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />instagram</ListGroup.Item>

                </ListGroup>
                <QZoon />
                <div className='position-relative'>
                    <img className='w-100' src={bg} alt="" />
                    <div className='position-absolute top-0 text-light text-center my-5 py-5'>
                        <h3 className='fw-bolder fs-1 pb-3'>Create an Amazing Newspaper</h3>
                        <p className='fw-semibold mx-5 fs-5 pb-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <Button variant="danger">Learn More</Button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RightNav;