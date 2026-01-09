import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './App.css';

const Projects = () => {
  
  const projects = [
    {
      title: "Retail Sales Analysis & Business Insights",
      image: "/images/sales.png",
      intro: "Monthly Commercial Management Report tracking prospects, sales effectiveness, and conversion metrics per salesperson and customer channel, including reasons for purchase or non-purchase and average sales performance.",
      link: "/RetailSales"
    },
    {
      title: "Global Video Game Sales Analysis & Market Insights",
      image: "/images/video.png",
      intro: "Monthly Commercial Management Report tracking prospects, sales effectiveness, and conversion metrics per salesperson and customer channel, including reasons for purchase or non-purchase and average sales performance.",
      link: "/VideoGames"
    },
    {
      title: "Fragrance Sales & Product Performance Dashboard",
      image: "/images/perfume.png",
      intro: "Monthly Commercial Management Report tracking prospects, sales effectiveness, and conversion metrics per salesperson and customer channel, including reasons for purchase or non-purchase and average sales performance.",
      link: "/"
    }
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-3">Power BI Projects</h1>
      <p className="card-text" style={{ textAlign: "justify" }}>
        Dynamic Power BI dashboards designed to visualize key metrics, analyze trends, and support strategic business decisions.
      </p>

      {projects.map((project, index) => (
        <Link
          to={project.link}
          key={index}
          className="text-decoration-none text-dark"
        >
          <div
            className="card mb-4 shadow-sm hover-card"
            style={{ maxWidth: "100%", cursor: "pointer" }}
          >
            <div className="row g-0 align-items-center">
              {/* image left */}
              <div className="col-md-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid p-3"
                  style={{ objectFit: "contain", height: "200px" }}
                />
              </div>
              {/* text right */}
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-justify" style={{ textAlign: "justify" }}>
                    {project.intro}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}

      <div className="mt-3">
        <Link to="/" className="btn btn-custom">
          ← Back
        </Link>
      </div>
    </div>
  );
};

export default Projects;