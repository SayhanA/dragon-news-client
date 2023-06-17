import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight, FaCcVisa } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsides from '../EditorsInsides/EditorsInsides';

const News = () => {
    const news = useLoaderData();
    // console.log(news)
    const { author, details, image_url, category_id, rating, thumbnail_url, title, total_view } = news;

    return (
        <div>
            <Card className='p-3'>
                <Card.Img className='p-3' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"> <FaArrowLeft /> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsides />
        </div>
    );
};

export default News;