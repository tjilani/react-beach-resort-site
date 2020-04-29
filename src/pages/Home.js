import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Service from "../components/Services";
import { Link } from "react-router-dom";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <React.Fragment>
      <Hero hero="defaultHero">
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Service />
      <FeaturedRooms />
    </React.Fragment>
  );
}
