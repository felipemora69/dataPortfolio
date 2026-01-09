import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './App.css';

const ExcelProjects = () => {
  
  const projects = [
    {
      title: "Marketing and Business Management",
      image: "/images/ic.png",
      intro: "Monthly Commercial Management Report tracking prospects, sales effectiveness, and conversion metrics per salesperson and customer channel, including reasons for purchase or non-purchase and average sales performance.",
      link: "/IC"
    }
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-3">Excel Projects</h1>
      <p className="card-text" style={{ textAlign: "justify" }}>
        Data analysis and dashboards with Microsoft Excel.
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

export default ExcelProjects;