import React, { useState } from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { request, GET } from "../api/ApiAdapter";
import { Container, Row, Col } from "reactstrap";
import FindTrainForm from "../components/UI/FindTrainForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import Testimonial from "../components/UI/Testimonial";

import BlogList from "../components/UI/BlogList";

const Home = () => {
  const [stations, setStations] = useState([]);
  const token = localStorage.getItem("token");

  const getAllStations = async (row) => {
    const res = await request(`/tracker/stations/getustation`, GET);
    if (!res.error) {
      const newStation = [];
      res.forEach((item) => {
        newStation.push({ label: item.name, value: item });
      });
      setStations(newStation);
    }
  };

  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__trains-left">
                  <h2>Find your Train here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindTrainForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our Traverlers says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;