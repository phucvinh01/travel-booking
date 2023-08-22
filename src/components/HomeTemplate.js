import React from 'react'
import './HomeTemplate.css'
import story from '../assets/story.jpg'
import header_1 from '../assets/header-1.jpg'
import header_2 from '../assets/header-2.jpg'
import destination_1 from '../assets/destination-1.jpg'
import destination_2 from '../assets/destination-2.jpg'
import destination_3 from '../assets/destination-3.jpg'
import destination_4 from '../assets/destination-4.jpg'
import trip_1 from '../assets/trip-1.jpg'
import trip_2 from '../assets/trip-2.jpg'
import trip_3 from '../assets/trip-3.jpg'
import gallery_1 from '../assets/gallery-1.jpg'
import gallery_2 from '../assets/gallery-2.jpg'
import gallery_3 from '../assets/gallery-3.jpg'
import { Link } from 'react-router-dom'
const HomeTemplate = () => {
    return (
        <>
            <header>
                <div class="section__container header__container">
                    <div class="header__image">
                        <img src={ header_1 } alt="header" />
                        <img src={ header_2 } alt="header" />
                    </div>
                    <div class="header__content">
                        <div>
                            <p class="sub__header">Book Now</p>
                            <h1>The Smiling 😊<br />agent for travel</h1>
                            <p class="section__subtitle">
                                Make your travel more enjoyable with us. We are the best travel
                                agency and we are providing the best travel services for our
                                clients.
                            </p>
                            <div class="action__btn-blues">
                                <button class="btn-blue">Plan a Trip</button>
                                <div class="story">
                                    <div class="video__image">
                                        <img src={ story } alt="story" />
                                        <span><i class="ri-play-fill"></i></span>
                                    </div>
                                    <span>Watch our story</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section class="section__container destination__container">
                <div class="section__header">
                    <div>
                        <h2 class="section__title">Explore top destinations</h2>
                        <p class="section__subtitle">
                            Explore your suitable and dream places around the world. Here you
                            can find your right destination.
                        </p>
                    </div>
                    <div class="destination__nav">
                        <span><i class="ri-arrow-left-s-line"></i></span>
                        <span><i class="ri-arrow-right-s-line"></i></span>
                    </div>
                </div>
                <div class="destination__grid">
                    <div class="destination__card">
                        <img src={ destination_1 } alt="destination" />
                        <div class="destination__details">
                            <p class="destination__title">Banff</p>
                            <p class="destination__subtitle">Canada</p>
                        </div>
                    </div>
                    <div class="destination__card">
                        <img src={ destination_2 } alt="destination" />
                        <div class="destination__details">
                            <p class="destination__title">Machu Picchu</p>
                            <p class="destination__subtitle">Peru</p>
                        </div>
                    </div>
                    <div class="destination__card">
                        <img src={ destination_3 } alt="destination" />
                        <div class="destination__details">
                            <p class="destination__title">Lauterbrunnen</p>
                            <p class="destination__subtitle">Switzerland</p>
                        </div>
                    </div>
                    <div class="destination__card">
                        <img src={ destination_4 } alt="destination" />
                        <div class="destination__details">
                            <p class="destination__title">Zhangjiajie</p>
                            <p class="destination__subtitle">China</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="trip">
                <div class="section__container trip__container">
                    <h2 class="section__title">Best trip package</h2>
                    <p class="section__subtitle">
                        Explore your suitable and dream places around the world. Here you can
                        find your right destination.
                    </p>
                    <div class="trip__grid">
                        <div class="trip__card">
                            <img src={ trip_1 } alt="trip" />
                            <div class="trip__details">
                                <p>Wasserwerk Frelberg, Germany</p>
                                <div class="rating"><i class="ri-star-fill"></i> 4.2</div>
                                <div class="booking__price">
                                    <div class="price"><span>From</span> $300</div>
                                    <button class="book__now">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="trip__card">
                            <img src={ trip_2 } alt="trip" />
                            <div class="trip__details">
                                <p>Patagonia, Argentina and Chile</p>
                                <div class="rating"><i class="ri-star-fill"></i> 4.5</div>
                                <div class="booking__price">
                                    <div class="price"><span>From</span> $450</div>
                                    <button class="book__now">Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="trip__card">
                            <img src={ trip_3 } alt="trip" />
                            <div class="trip__details">
                                <p>The Dolomites, Italy</p>
                                <div class="rating"><i class="ri-star-fill"></i> 4.7</div>
                                <div class="booking__price">
                                    <div class="price"><span>From</span> $400</div>
                                    <button class="book__now">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="view__all">
                        <Link to={ '/tours' } class="btn-blue"> View All</Link>
                    </div>
                </div>
            </section>

            <section class="gallary">
                <div class="section__container gallary__container">
                    <div class="image__gallary">
                        <div class="gallary__col">
                            <img src={ gallery_1 } alt="gallary" />
                        </div>
                        <div class="gallary__col">
                            <img src={ gallery_2 } alt="gallary" />
                            <img src={ gallery_3 } alt="gallary" />
                        </div>
                    </div>
                    <div class="gallary__content">
                        <div>
                            <h2 class="section__title">
                                Our trip gallary that will inspire you
                            </h2>
                            <p class="section__subtitle">
                                Explore your suitable and dream places around the world. Here you
                                can find your right destination.
                            </p>
                            <Link to={ '/tours' } class="btn-blue">View All</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section class="subscribe">
                <div class="section__container subscribe__container">
                    <div class="subscribe__content">
                        <h2 class="section__title">Subscribe to get special prize</h2>
                        <p class="section__subtitle">
                            Explore your suitable and dream places around the world. Here you
                            can find your right destination.
                        </p>
                    </div>
                    <div class="subscribe__form">
                        <form>
                            <input type="email" placeholder="Your email here" />
                            <button class="btn-blue" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeTemplate