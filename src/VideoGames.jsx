import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const VideoGames = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <h1 className="mb-4">Global Video Game Sales Analysis & Market Insights</h1>

        {/* Goals Section */}
        <section className="mb-5">
          <h2>Project Goals</h2>
          <ul className="text-justify">
            <li>Analyze global video game sales across regions, platforms, genres, and publishers.</li>
            <li>Identify top-performing games and platforms by total sales volume.</li>
            <li>Explore regional market trends and historical performance from 1980 to 2017.</li>
            <li>Visualize sales distribution by genre and platform to uncover consumer preferences.</li>
            <li>Deliver insights to support strategic decisions in game development and publishing.</li>
          </ul>
        </section>

        {/* Setup Section */}
        <section className="mb-5">
          <h2>Setup</h2>
          <p className="text-justify">
            This project was built using Microsoft Power BI and a historical dataset of global video game sales. 
            The data includes game titles, release years, genres, platforms, publishers, regions, and total sales in billions.
          </p>
          <p>
            GitHub repository: <a href="https://github.com/felipemora69/Videogames_Sales_PowerBi" target="_blank" rel="noopener noreferrer">https://github.com/felipemora69/Videogames_Sales_PowerBi</a>
          </p>
          <div className="mb-3">
            <img 
              src="/images/sample1.png" 
              alt="Project Setup" 
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Analysis Section */}
        <section className="mb-5">
          <h2>Analysis</h2>
          <p className="text-justify">
            The dashboard analyzes total sales by region, genre, platform, and year. It highlights top-selling games, dominant platforms, and regional preferences. 
            Key metrics include total global sales, sales distribution by region, and performance trends over time.
          </p>
        </section>

        {/* Data Exploration Section */}
        <section className="mb-5">
          <h2>Data Exploration</h2>
          <p className="text-justify">
            The dataset was cleaned and structured to support dynamic filtering and cross-category comparisons. 
            Calculated fields include total sales per game, genre, and region. Relationships were built to enable drill-down analysis by year, platform, and publisher.
          </p>
          <div className="mb-3">
            <img 
              src="/images/sample2.png" 
              alt="Data Exploration" 
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Images Section */}
        <section className="mb-5">
          <h2>Visualizations</h2>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <img src="/images/sample3.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "600px", objectFit: "cover" }} />
          </div>
        </section>

        {/* Key Findings Section */}
        <section className="mb-5">
          <h2>Key Findings</h2>
          <ul className="text-justify">
            <li>North America leads in total video game sales, followed by Europe and Japan.</li>
            <li>Sports, Platformers, and Racing are the top-selling genres globally.</li>
            <li>Wii and NES platforms dominate historical sales, with titles like Wii Sports and Super Mario Bros. leading the charts.</li>
            <li>Sales peaked between 2006 and 2010, driven by blockbuster releases and platform popularity.</li>
            <li>Publishers like Nintendo and Ubisoft show strong regional performance, with genre specialization influencing success.</li>
          </ul>
        </section>

        {/* Recommendations Section */}
        <section className="mb-5">
          <h2>Recommendations</h2>
          <ul className="text-justify">
            <li>Focus future game development on high-performing genres and platforms with proven market demand.</li>
            <li>Leverage regional preferences to tailor marketing and release strategies by continent.</li>
            <li>Use historical sales trends to forecast demand and optimize release timing.</li>
            <li>Analyze publisher performance to identify strategic partnerships and licensing opportunities.</li>
          </ul>
        </section>

        <Link to="/powerbi-projects" className="btn btn-custom mb-5">
          ← Back
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default VideoGames;