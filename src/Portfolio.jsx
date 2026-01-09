import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const tools = [
  {
    name: "Python",
    description: "Unlock insights with automation and modeling using Python.",
    icon: <img src="/images/python.png" style={{ width: 280, height: 120 }} alt="Python Logo" />,
    link: "/python-projects"
  },
  {
    name: "SQL",
    description: "Powerful queries and relational analysis using SQL.",
    icon: <img src="/images/sql.png" style={{ width: 110, height: 110, marginLeft: 16, marginTop: 10 }} alt="SQL Logo" />,
    link: "/sql-projects"
  },
  {
    name: "Power BI",
    description: "Interactive dashboards and visual storytelling with Power BI.",
    icon: <img src="/images/powerbi.png" style={{ width: 120, height: 120 }} alt="Power BI Logo" />,
    link: "/powerbi-projects"
  },
  {
    name: "Excel",
    description: "Business insights and analytics with Excel dashboards.",
    icon: <img src="/images/excel.png" style={{ width: 130, height: 120, marginLeft: 2 }} alt="Excel Logo" />,
    link: "/excel-projects"
  }
];

const Portfolio = () => {
  // State for "See More" toggle in About Me
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => setShowFullText(!showFullText);

  return (
    <div>

      {/* Hero Section */}
      <section className="hero-section">
        <Container className="h-full py-20">
          <Row className="align-items-center">
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl font-bold mb-4">Felipe Mora</h1>
                <h3 className="text-4xl font-bold mb-4">Data Scientist Developer</h3>
                <p className="text-xl mb-4">Driven by curiosity and precision, I leverage statistical analysis, data visualization, and storytelling to uncover patterns and guide data-informed business solutions.</p>
              </motion.div>
            </Col>
            <Col md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="d-flex flex-column align-items-center"
              >
                <img className="hero-img mb-3"
                  src="/images/tat.logo.png"
                  alt="Hero"
                />
                <div className="d-flex justify-content-center gap-5 mt-2">
                  <img className="hero-img"
                    src="/images/m-logo.png"
                    alt="Left Img"
                  />
                  <img className="hero-img"
                    src="/images/joya-logo.png"
                    alt="Right Img"
                  />
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Explanation paragraph */}
          <Row className="py-5 px-3">
            <Col md={12}>
              <p className="text-center small text-muted">
                *Design serves as a visual language that captures moments and identities, offering insight into the values and perspectives of a person, team, or brand. It communicates who we are and how we connect with the world. These logos above not only capture moments but also reflect the essence of my creative journey, shaping unique narratives that intertwine design, technology, and user experience.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tools Section */}
      <section className="tools-sec py-5 rounded mb-3">
        <div className="mb-4 text-center">
          <h2 className="mb-3 fw-bold">Explore My Projects</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Dive into a curated collection of projects showcasing my skills with Python, SQL, Power BI, and Excel. Each section highlights hands-on work demonstrating data analysis, visualization, and reporting expertise.
          </p>
        </div>

        <Row>
          {tools.map((tool, idx) => (
            <div key={idx} className="col-md-6 mb-4">
              <Link to={tool.link} className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm hover-card ">
                  {tool.icon}
                  <div className="card-body">
                    <h5 className="card-title">{tool.name}</h5>
                    <p className="card-text">{tool.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Row>
      </section>

      {/* About Section */}
      <section className="bg-white py-5 px-3 rounded mb-5">
        <Container>
            <Row className="about-sec align-items-center">
              <Col md={6}>
                <div className="about-me-text p-6 rounded-lg shadow-md mb-6">
                  <h2 className="h3 mb-3">About Me</h2>
                  <p className="mb-1">
                    Hi, I'm Felipe.
                  </p>
                  <p className="mb-1 text-justify font-light">
                  I recently completed my Software Development diploma at Bow Valley College. With a Bachelor of Business Administration and 6 years of experience in data analysis and BI, I am passionate about analytics, problem solving, and continuous learning. I specialize in transforming data into insights, focusing on dashboard development, data modeling, and performance reporting.
                    {/* Truncated text */}
                    {showFullText && (
                      <>
                        <br />
                        I value strong relationships and a positive work environment, where collaboration and trust lead to better outcomes. I’m known for clear communication and building strong connections with teammates and stakeholders.
                        <br />
                        Beyond technology, I am passionate about art and design, believing that logos, images, and graphics can communicate culture, identity, and user interaction like a work of art. I also enjoy collecting vinyl records, and exploring new craft beers.
                      </>
                    )}
                  </p>
                  {/* See More Toggle */}
                  <div className="mt-3">
                    <span
                      className="see-more-text cursor-pointer text-blue-600"
                      onClick={toggleText}
                    >
                      {showFullText ? 'See Less' : '... See More'}
                    </span>
                  </div>
                </div>
              </Col>
              <Col md={6} className="image-container">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden"
              >
                <img
                  src="/images/aboutme.png"
                  alt="About"
                  className="img-about img-fluid rounded hover-zoom cursor-pointer"
                />
              </motion.div>
              </Col>
            </Row>
        </Container>
      </section>
    </div>
  );
};

export default Portfolio;