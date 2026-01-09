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
            The data model includes relationships between product categories, financial metrics, and geographic dimensions.
          </p>
          <p>
            GitHub repository: <a href="https://github.com/felipemora69/Retail_Sales_PowerBI" target="_blank" rel="noopener noreferrer">https://github.com/felipemora69/Retail_Sales_PowerBI</a>
          </p>
          <div className="mb-3">
            <img 
              src="/images/S2-RS.png" 
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
            The dashboard analyzes income, expenses, and profit across continents, regions, and product types. 
            It highlights margin trends, identifies high-performing areas, and compares recovery patterns post-pandemic. 
            Key metrics are segmented by year, quarter, and geography to support operational planning and strategic forecasting.
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
              src="/images/S1-RS.png" 
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
            <img src="/images/s3-RS.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "600px", objectFit: "cover" }} />
          </div>
        </section>

        {/* Key Findings Section */}
        <section className="mb-5">
          <h2>Key Findings</h2>
          <ul className="text-justify">
            <li>Income and profit vary significantly by continent, with North America and Europe generating the highest revenue and margins, while Africa and South America contribute the least.</li>
            <li>PCs and Cellphones are the strongest revenue drivers across all continents, consistently producing the highest income and profit each quarter.</li>
            <li>Accessories, TVs, and Tablets show lower profitability, with tighter margins and higher expense ratios, especially in Q1 across multiple regions.</li>
            <li>Quarterly trends show steady growth from 2025 to 2027, with Q3 and Q4 typically outperforming Q1 due to seasonal demand and holiday cycles.</li>
            <li>Margin performance differs by continent, with Europe and North America maintaining stronger profitability, while Asia and South America show more volatility in expenses and net profit.</li>
            <li>The top 5 countries by profit are, the United States (24.6%), China (12.9%), Germany (12.5%), India (11.6%), and Canada (7.2%). Collectively account for nearly 70% of total global profit, making them the primary drivers of company performance across all continents.
</li>
          </ul>
        </section>

        {/* Recommendations Section */}
        <section className="mb-5">
          <h2>Recommendations</h2>
          <ul className="text-justify">
            <li>Monitor quarterly performance trends to understand seasonality and identify periods of strong or weak demand.</li>
            <li>Compare continent level profitability to highlight regions with stable margins versus those with higher volatility.</li>
            <li>Use country level contribution insights to understand where most global profit originates.</li>
            <li>Focus analysis on high margin product categories (PCs, Cellphones, Apps), as they consistently drive the largest share of global profit.</li>
            <li>Monitor expense-to-income ratios per continent to identify operational inefficiencies and optimize cost management across product lines.</li>
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