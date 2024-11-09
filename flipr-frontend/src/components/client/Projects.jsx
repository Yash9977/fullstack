import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Client from "./Client";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/");
        setProjects(response.data); 
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []); 

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="projects">
      <Container>
        <h4 style={{textAlign:"center"}}>Our Projects</h4>
        <p style={{textAlign:"center"}}>
          We know that buyers are looking for and suggest projects that will
          bring clients top dollar for the sale of their homes.
        </p>

        {/* Carousel */}
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card project-back" style={{ margin: "20px" }}>
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.name}
                />
                <div className="card-body">
                  <h6 className="card-title">{project.name}</h6>
                  <p className="card-text">{project.description}</p>
                  <Button className="project-btn">READ MORE</Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Projects;
