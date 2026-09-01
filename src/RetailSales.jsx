import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const RetailSales = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <h1 className="mb-4">Global Retail Sales Analysis Report</h1>
        <h2>Overview</h2>
        <p className="text-justify">
          This report provides a comprehensive analysis of global retail financial performance across continents, product types, and time periods. 
          It evaluates income, expenses, profit, and margin behavior, highlighting geographic disparities, product profitability, and seasonal trends. Interactive visuals support strategic decision making by revealing high performing regions, efficient product lines, and quarterly growth patterns.
        </p>
        <p>
          GitHub repository: <a href="https://github.com/felipemora69/Retail_Sales_PowerBi" target="_blank" rel="noopener noreferrer">https://github.com/felipemora69/Videogames_Sales_PowerBi</a>
        </p>

        {/* Goals Section */}
        <section className="mb-5">
          <h2>Project Goals</h2>
          <ul className="text-justify">
            <li>Analyze financial performance across product types and regions using Power BI.</li>
            <li>Track income, expenses, and profit margins by quarter, year, and continent.</li>
            <li>Identify top-performing regions, products, and sales channels.</li>
            <li>Visualize trends in profitability and operational efficiency over time.</li>
            <li>Support strategic decisions with data-driven insights and interactive dashboards.</li>
          </ul>
        </section>

        {/* Setup Section */}
        <section className="mb-5">
          <h2>Setup</h2>
          <p className="text-justify">
            This project was built using Power BI and sample retail data covering product sales, income, and expenses across multiple regions and years. 
            The data model links product categories with financial and geographic metrics, enabling dynamic filtering, drill‑through analysis, and multi‑level comparisons.
          </p>
          <div className="mb-3">
            <img 
              src="/images/rs2.png" 
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
            The dashboard evaluates income, expenses, profit, and margin across continents, regions, and product types. 
            It highlights margin trends, identifies high performing markets, and compares quarterly recovery patterns. 
            Metrics are segmented by year, quarter, and geography to support operational planning and strategic forecasting.
          </p>
        </section>

        {/* Data Exploration Section */}
        <section className="mb-5">
          <h2>Data Exploration</h2>
          <p className="text-justify">
            The dataset was cleaned and modeled to support dynamic filtering and cross-region comparisons. 
            Calculated fields include profit, margin, and year-over-year trends. Relationships were established between product categories and financial metrics to enable drill-through analysis.
          </p>
          <div className="mb-3">
            <img 
              src="/images/rs6.png" 
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
            Each page includes dynamic on hover effects, interactive filters, cross highlighting, and responsive visuals.
          </p>
          <p className="text-justify">
            Provides a quick overview of the project, its goals, and what the user can explore in the report.
          </p>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <img src="/images/rs1.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "600px", objectFit: "cover" }} />
          </div>
          <p className="text-justify">
            Shows financial trends across years and quarters, highlighting income, expenses, profit, and margin behavior.
          </p>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <img src="/images/rs3.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "600px", objectFit: "cover" }} />
          </div>
          <p className="text-justify">
            Provides a focused view of product and country performance, showing top profit items, profit by product type, country income levels, and margin differences across product categories.
          </p>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <img src="/images/rs4.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "600px", objectFit: "cover" }} />
          </div>
          <p className="text-justify">
            Provides a quick overview of the project, its goals, and what the user can explore in the report.
          </p>
          <div className="d-flex justify-content-between flex-wrap gap-3">
            <img src="/images/rs5.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "600px", objectFit: "cover" }} />
          </div>
        </section>

        {/* Key Findings Section */}
        <section className="mb-5">
          <h2>Key Findings</h2>
          <ul className="text-justify">
            <li>North America and Europe generate the highest income and profit, while Africa and South America show lower performance.</li>
            <li>PCs and Cellphones are the strongest revenue drivers across all continents.</li>
            <li>Accessories, TVs, and Tablets show lower profitability, with tighter margins and higher expense ratios, especially in Q1.</li>
            <li>Quarterly trends show steady growth from 2025 to 2027, with Q3 and Q4 outperforming Q1 due to seasonal demand and holidays.</li>
            <li>Margin stability is strongest in Europe and North America; Asia and South America show higher volatility.</li>
            <li>The top 5 countries by profit are, the United States (24.6%), China (12.9%), Germany (12.5%), India (11.6%), and Canada (7.2%). Collectively account for nearly 70% of total global profit.</li>
          </ul>
        </section>

        {/* Recommendations Section */}
        <section className="mb-5">
          <h2>Recommendations</h2>
          <ul className="text-justify">
            <li>Monitor quarterly performance trends to understand seasonality and identify periods of strong or weak demand.</li>
            <li>Compare continent level profitability to highlight stable versus volatile markets.</li>
            <li>Use country level contribution insights to understand where most global profit originates.</li>
            <li>Focus analysis on high margin product categories (PCs, Cellphones, Apps).</li>
            <li>Track expense-to-income ratios per continent to identify operational inefficiencies and optimize cost management.</li>
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

export default RetailSales;