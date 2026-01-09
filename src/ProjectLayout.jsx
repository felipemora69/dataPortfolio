const ProjectLayout = ({ toolName, intro, projects }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{toolName} Projects</h2>
      <p className="text-center mb-5">{intro}</p>

      <div className="row">
        {projects.map((project, index) => (
          <div className="row mb-5 align-items-center" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="col-md-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-md-6">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-6 order-md-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded shadow"
                  />
                </div>
                <div className="col-md-6 order-md-1">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectLayout;