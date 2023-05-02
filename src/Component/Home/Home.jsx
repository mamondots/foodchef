import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Home.css';
import imgOne from '../../assets/img05 .jpg'

const Home = () => {
    return (
        <div className="bg-dark text-Primary">
            <div>
                <Card className="card-box">
                    <Card.Img className='banner-img' src={imgOne} alt="Card image" fluid />
                    <Card.ImgOverlay className='card-info'>
                        <Card.Title>
                            <p className='sub-title'>
                                FOODS LOVER COME HERE.
                            </p>
                            </Card.Title>
                            <Card.Title>
                            <h2 className='title'>
                            Welcome to MamonDots.! <span>Find our <br/>best recipes</span>
                            </h2>
                            </Card.Title>
                        <Card.Text className=''>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis consequuntur ratione doloribus fugit possimus eos, <br/>consequatur magni numquam ipsum reprehenderit culpa molestias asperiores? Fugit, suscipit quisquam, <br/>eum provident nihil, harum quaerat ratione totam earum delectus voluptas ducimus sit <br/>ullam dolorem obcaecati! Nesciunt deserunt cupiditate.
                        </Card.Text>
                        <Card.Text className='btns'>
                        <Button variant="outline-light">Watch Video</Button>
                        <Button variant="outline-light">Read More</Button>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    );
};

export default Home;