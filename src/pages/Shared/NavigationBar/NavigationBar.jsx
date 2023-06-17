import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import './NavigationBar.css'

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-sayhana.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className=" mx-auto d-flex justify-content-center align-items-center">
                        <div className='news'>
                            <div className='news-main py-2'>
                                News Feeds
                            </div>
                            <div className='news-dropdown '>

                                {
                                    categories.map(category => <a key={category.id}>
                                        <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
                                    </a>)
                                }

                                
                            </div>
                        </div>

                        <div className='Events mx-4 '>
                            <div className='Events-main py-2'>
                                Upcoming Events
                            </div>
                            <div className='Events-dropdown '>
                                <Link to="/category/0">
                                    All Events
                                </Link>
                                <Link to="">
                                    All Events
                                </Link>
                                <Link to="/">
                                    All Events
                                </Link>
                                <Link to="/">
                                    All Events
                                </Link>
                                <Link to="/">
                                    All Events
                                </Link>
                                <Link to="">
                                    All Events
                                </Link>
                                <Link to="/">
                                    All Events
                                </Link>
                            </div>
                        </div>

                        <div className='Jobs'>
                            <div className='Jobs-main py-2'>
                                Jobs
                            </div>
                            <div className='Jobs-dropdown '>
                                <Link to="/category/0">
                                    All Jobs
                                </Link>
                                <Link to="">
                                    All Jobs
                                </Link>
                                <Link to="/">
                                    All Jobs
                                </Link>
                                <Link to="/">
                                    All Jobs
                                </Link>
                                <Link to="/">
                                    All Jobs
                                </Link>
                                <Link to="">
                                    All Jobs
                                </Link>
                                <Link to="/">
                                    All Jobs
                                </Link>
                            </div>
                        </div>

                        {/* <Nav.Link href="#pricing">Upcoming Events</Nav.Link> */}
                        {/* <Nav.Link href="#pricing">Jobs</Nav.Link> */}

                    </Nav>

                    <Nav>
                        {user && <FaRegUserCircle className='fs-2 text-black' />}
                        {
                            user ?
                                <Button onClick={handleLogOut} variant="secondary bg-black">Log Out</Button>
                                : <Link to='/login'>
                                    <Button variant="secondary bg-black">LogIn</Button>
                                </Link>
                        }
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </Container>
    );
};

export default NavigationBar;