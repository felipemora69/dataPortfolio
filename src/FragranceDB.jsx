import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const FragranceDB = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <h1 className="mb-4">Fragrance Sales & Product Performance Dashboard</h1>
        <h2>Overview</h2>
        <p className="text-justify">
          This Power BI dashboard provides a comprehensive analysis of fragrance sales and product performance across brands, countries, olfactive families, concentration types, and gender segments.
          It evaluates revenue, units sold, pricing behavior, and market positioning, revealing geographic patterns, scent trends, and concentration preferences.
          Interactive visuals and dynamic filtering support strategic decision‑making by highlighting high‑performing brands, dominant olfactive families, and concentration‑based pricing differences.
        </p>
        <p>
          GitHub repository: <a href="https://github.com/felipemora69/FragranceDB_PowerBI" target="_blank" rel="noopener noreferrer">https://github.com/felipemora69/Videogames_Sales_PowerBi</a>
        </p>

        {/* Goals Section */}
        <section className="mb-5">
          <h2>Project Goals</h2>
          <ul className="text-justify">
            <li>Analyze fragrance performance across brands, countries, olfactive families, and concentration types.</li>
            <li>Track revenue, units sold, average price, and product count using custom DAX measures.</li>
            <li>Identify top performing brands and countries based on revenue and sales volume.</li>
            <li>Visualize scent trends and concentration behavior to understand product positioning.</li>
            <li>Support strategic insights with interactive dashboards and multi‑level filtering.</li>
          </ul>
        </section>

        {/* Setup Section */}
        <section className="mb-5">
          <h2>Setup</h2>
          <p className="text-justify">
            This project was built using Power BI and a curated dataset of fragrances and brands.
            The data model links brand metadata with product level attributes such as price, units sold, olfactive family, concentration, and gender.
            This structure enables dynamic filtering, drill through analysis, and cross category comparisons.
          </p>
          <div className="mb-3">
            <img 
              src="/images/frag6.png" 
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
            The dashboard evaluates revenue, units sold, average price, and product count across brands, countries, olfactive families, concentration types, and gender.
            It highlights pricing differences between niche and designer brands, identifies dominant scent families, and compares concentration preferences. 
            Metrics are segmented by geography, brand type, and product attributes to support market understanding and product strategy.
          </p>
        </section>

        {/* Data Exploration Section */}
        <section className="mb-5">
          <h2>Data Exploration</h2>
          <p className="text-justify">
            The dataset was cleaned and modeled to support dynamic filtering and cross brand comparisons. 
            Concentration types were extracted from product titles, converting abbreviations (EdP, EdT, Extrait) into standardized labels.
            Missing or ambiguous values such as “Unknown” were replaced with “Eau de Parfum.” Olfactive families were normalized, and brand metadata was validated to ensure a clean one to many relationship between brands and fragrances.
          </p>
          <div className="mb-3">
            <img 
              src="/images/frag5.png" 
              alt="Data Exploration" 
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
          <div className="mb-3">
            <img 
              src="/images/frag6.png" 
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
            Each page includes hover effects, interactive filters, cross highlighting, and responsive visuals.
          </p>
          <p className="text-justify">
            Provides a high level summary of revenue, units sold, average price, and product count, along with top brands, olfactive family distribution, concentration breakdown, and gender segmentation.
          </p>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <img src="/images/frag1.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "600px", objectFit: "cover" }} />
          </div>
          <p className="text-justify">
            Shows brand performance by country, niche vs designer comparisons, and a detailed brand table with revenue, units sold, and pricing metrics.
          </p>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <img src="/images/frag2.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "600px", objectFit: "cover" }} />
          </div>
          <p className="text-justify">
            Highlights scent family dominance, concentration preferences, pricing behavior by concentration, and gender based olfactive patterns using heatmaps and distribution charts.
          </p>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <img src="/images/frag3.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "600px", objectFit: "cover" }} />
          </div>
          <p className="text-justify">
            Provides a quick overview of the project, its goals, and what the user can explore in the report.
          </p>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <img src="/images/frag4.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "600px", objectFit: "cover" }} />
          </div>
        </section>

        {/* Key Findings Section */}
        <section className="mb-5">
          <h2>Key Findings</h2>
          <ul className="text-justify">
            <li>Italy and France show the strongest revenue performance across brands.</li>
            <li>Niche brands exhibit higher average prices, while designer brands dominate sales volume.</li>
            <li>Eau de Parfum is the most common and highest performing concentration type.</li>
            <li>Woody, Floral, and Oriental families lead in units sold across gender segments.</li>
            <li>Gender segmentation reveals distinct olfactive preferences, with Unisex products showing strong cross family performance.</li>
            <li>Concentration types display clear pricing tiers, with Parfum and Extrait positioned at premium levels.</li>
          </ul>
        </section>

        {/* Recommendations Section */}
        <section className="mb-5">
          <h2>Recommendations</h2>
          <ul className="text-justify">
            <li>Focus on high margin olfactive families and concentration types (EdP, Parfum).</li>
            <li>Strengthen brand presence in high performing countries through targeted product releases.</li>
            <li>Use gender segmentation insights to refine product positioning and marketing strategies.</li>
            <li>Monitor concentration based pricing to optimize premium product lines.</li>
            <li>Leverage niche vs designer comparisons to identify opportunities for portfolio expansion.</li>
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

export default FragranceDB;