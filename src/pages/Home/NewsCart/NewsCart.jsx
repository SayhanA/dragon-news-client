import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
    const { _id, title, thumbnail_url, image_url, details, author, total_view, rating } = news;
    return (
        <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ width: "40px", height: "40px" }} src={author.img} roundedCircle />
                <div className='ms-2 flex-grow-1'>
                    <p className='p-0 m-0'>{author.name}</p>
                    <p className='p-0 m-0'>{author.published_date}</p>
                </div>
                <div className='d-flex gap-3 fs-1'>
                    <FaRegBookmark></FaRegBookmark>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>

                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</>
                        : <> {details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex gap-2'>
                    <Rating style={{ maxWidth: 100 }} value={Math.round(rating.number)} readOnly />
                    {rating.number}
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCart;