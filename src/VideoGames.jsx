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
        <h2>Overview</h2>
        <p className="text-justify">
          This project presents a comprehensive analysis of global video game sales from 1980 to 2017, exploring market behavior across regions, platforms, genres, and publishers. 
          The dashboard was designed using Microsoft Power BI and includes Page Navigation for a multi‑page analytical experience, dynamic interactions, and on‑hover visual effects to enhance user exploration.
        </p>
        <p>
          GitHub repository: <a href="https://github.com/felipemora69/Videogames_Sales_PowerBi" target="_blank" rel="noopener noreferrer">https://github.com/felipemora69/Videogames_Sales_PowerBi</a>
        </p>

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
          
          <div className="mb-3">
            <img 
              src="/images/Model.png"
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
            The dashboard analyzes total sales by region, genre, platform, and year. It highlights top-selling games, dominant platforms, historical performance trends, and regional preferences. 
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
              src="/images/Table.png" 
              alt="Data Exploration" 
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Images Section */}
        <section className="mb-5">
          <h2>Visualizations</h2>
          <p className="text-justify">
            This project uses Page Navigation to organize insights into multiple analytical pages. 
            Each page includes dynamic on‑hover effects, interactive filters, cross‑highlighting, and responsive visuals.
          </p>
          <p className="text-justify">
            Home page has KPI cards with peak years and top publishers to provide a macro view of the market.
          </p>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <img src="/images/Home.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "600px", objectFit: "cover" }} />
          </div>
          <p className="text-justify">
            Reporting page has game‑level drill‑down to identify market leaders and historical hits. on top games and platforms.
          </p>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <img src="/images/Insights.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "600px", objectFit: "cover" }} />
          </div>
          <p className="text-justify">
            Insights page has regional genre preferences to understand consumer tastes and genre evolution through the genre performance.
          </p>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <img src="/images/Data.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "600px", objectFit: "cover" }} />
          </div>
        </section>

        {/* Key Findings Section */}
        <section className="mb-5">
          <h2>Key Findings</h2>
          <ul className="text-justify">
            <li>North America leads global video game sales, followed by Europe and Japan.</li>
            <li>Sports, Platformers, and Racing are the top-selling genres worldwide.</li>
            <li>Wii and NES platforms dominate historical sales, with titles like Wii Sports and Super Mario Bros. leading the charts.</li>
            <li>Sales peaked between 2006 and 2010, driven by blockbuster releases and platform popularity.</li>
            <li>Publishers like Nintendo and Ubisoft show strong regional performance, with genre specialization influencing success.</li>
          </ul>
        </section>

        {/* Recommendations Section */}
        <section className="mb-5">
          <h2>Recommendations</h2>
          <ul className="text-justify">
            <li>Focus future game development on high-performing genres and platforms with proven demand.</li>
            <li>Tailor marketing strategies to regional preferences.</li>
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