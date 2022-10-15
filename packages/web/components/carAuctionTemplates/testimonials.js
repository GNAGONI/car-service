import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Rating from 'components/ratingStars';

export default () => (
  <section className="content section-testimonials single-slide bg-before-info">
    <Container>
      <Row>
        <Col>
          <header className="section-head text-center">
            <h2>Reviews from customers selling similar cars on Car.service</h2>
            <div className="text-box">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elitd iam nonummy nibh euis mod tincidunt ut laoreet
                dolorea am erat volutpat. Ut wisi enim ad minim veniam,
              </p>
              <div className="btn-block">
                <a href="#" className="btn btn-primary btn-ml">
                  Auction your car
                </a>
              </div>
            </div>
          </header>
        </Col>
      </Row>
    </Container>

    <div className="content-holder">
      <Container>
        <Row className="wrap testimonial-slider-single">
          <Col className="box-testimonial text-center">
            <blockquote>
              <cite>
                <strong className="title">Joe Blogg</strong>
                <strong>Essex</strong>
              </cite>
              <Rating />
              <q>
                Lorem ipsum dolor sit amet, consectetuer adipi scing elitd iam nonummy nibh euis mod tincidunt ut
                laoreet dolorea am erat volutpat. Ut wisi enim ad minim. Lorem ipsum dolor sit amet, consectetuer. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam{' '}
              </q>
            </blockquote>
          </Col>
          <Col className="box-testimonial text-center">
            <blockquote>
              <cite>
                <strong className="title">Joe Blogg</strong>
                <strong>Essex</strong>
              </cite>
              <Rating />
              <q>
                Lorem ipsum dolor sit amet, consectetuer adipi scing elitd iam nonummy nibh euis mod tincidunt ut
                laoreet dolorea am erat volutpat. Ut wisi enim ad minim. Lorem ipsum dolor sit amet, consectetuer. Lorem
                ipsum dolor sit amet, consectetuer adipiscing elit, sed diam{' '}
              </q>
            </blockquote>
          </Col>
          <Col className="box-testimonial text-center">
            <blockquote>
              <cite>
                <strong className="title">Joe Blogg</strong>
                <strong>Essex</strong>
              </cite>
              <Rating />
              <q>
                Car.service was fantastic in lorem ipsum dolor sit amet, consecte adipiscing elit, diam non my nibh
                euismod tin unt ut adipiscing elit volutpat.
              </q>
            </blockquote>
          </Col>
          <Col className="box-testimonial text-center">
            <blockquote>
              <cite>
                <strong className="title">Joe Blogg</strong>
                <strong>Essex</strong>
              </cite>
              <Rating />
              <q>
                Car.service was fantastic in lorem ipsum dolor sit amet, consecte adipiscing elit, diam non my nibh
                euismod tin unt ut adipiscing elit volutpat.
              </q>
            </blockquote>
          </Col>
          <Col className="box-testimonial text-center">
            <blockquote>
              <cite>
                <strong className="title">Joe Blogg</strong>
                <strong>Essex</strong>
              </cite>
              <Rating />
              <q>
                Car.service was fantastic in lorem ipsum dolor sit amet, consecte adipiscing elit, diam non my nibh
                euismod tin unt ut adipiscing elit volutpat.
              </q>
            </blockquote>
          </Col>
          <Col className="box-testimonial text-center">
            <blockquote>
              <cite>
                <strong className="title">Joe Blogg</strong>
                <strong>Essex</strong>
              </cite>
              <Rating />
              <q>
                Car.service was fantastic in lorem ipsum dolor sit amet, consecte adipiscing elit, diam non my nibh
                euismod tin unt ut adipiscing elit volutpat.
              </q>
            </blockquote>
          </Col>
        </Row>
      </Container>
      <div className="btn-arrows">
        <a href="#" className="btn-prev">
          <span className="sr-only">Previous</span>
        </a>
        <a href="#" className="btn-next">
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
);
