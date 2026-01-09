import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const IC = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <h1 className="mb-4">Marketing and Business Management Report</h1>
        <p>Real Work Experience</p>
        <p>IC Constructora | Bogotá D.C., Colombia</p>

        {/* Goals Section */}
        <section className="mb-5">
          <h2>Project Goals</h2>
          <ul className="text-justify">
            <li>Tracking KPIs and sales performance by analyzing prospects and sales effectiveness per salesperson.</li>
            <li>Analyze conversion rates from contacted prospects to sales.</li>
            <li>Evaluate effectiveness per customer channel.</li>
            <li>Identify reasons for purchases and non-purchases.</li>
            <li>Provide actionable insights for business decisions.</li>
          </ul>
        </section>

        {/* Setup Section */}
        <section className="mb-5">
          <h2>Setup</h2>
          <p className="text-justify">
            This project was built using Microsoft Excel as a data dashboard. 
            The dataset includes sales and prospect information per month for a construction company.
          </p>
          <p>
            GitHub repository: <a href="https://github.com/yourusername/ic-project" target="_blank" rel="noopener noreferrer">https://github.com/yourusername/ic-project</a>
          </p>
          <p style={{ textAlign: "justify" }}>
            *The dataset contains ticket tracking and natural market assignment records from September to October 2021. It includes detailed timestamps for both ticket entries and natural market interactions, categorized by month, advisor name, and tower/apartment identifiers. The data is divided into two segments: Tickets, which represent leads formally entering the system, and Natural Market, which represents leads generated through marketing channels such as billboard, hanging banner, promotional flags, and referral. This raw data was used to monitor operational flow, evaluate the performance of each marketing channel, and support downstream analysis of advisor activity and lead conversion.* 
          </p>
          <div className="mb-3">
            <img 
              src="/images/ic1.png" 
              alt="Project Setup" 
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <p style={{ textAlign: "justify" }}>
            *This dataset tracks client interactions and sales prospects by advisor. It includes contact details, tower/apartment info, dates of first contact and resolution, status updates, and average follow up time. The structure supports analysis of advisor performance, client engagement, and sales cycle efficiency.*
          </p>
          <div className="mb-3">
            <img 
              src="/images/ic2.png" 
              alt="Project Setup" 
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <p style={{ textAlign: "justify" }}>
            *This dataset captures detailed information about sales prospects, including reasons for purchase or non-purchase, decision-maker roles, prospect status, and demographic attributes such as employment status, profession, neighborhood, and age. It supports behavioral analysis of potential clients and helps identify patterns in decision-making, lead qualification, and advisor follow up outcomes.*
          </p>
          <div className="mb-3">
            <img 
              src="/images/ic3.png" 
              alt="Project Setup" 
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Analysis Section */}
        <section className="mb-5">
          <h2>Analysis</h2>
          <p className="text-justify">
            The analysis focused on answering critical business questions such as: 
            which channels generate the most sales, which salespeople are the most effective, 
            and what factors contribute to prospects converting into customers.
          </p>
        </section>

        {/* Data Exploration Section */}
        <section className="mb-5">
          <h2>Data Exploration</h2>
          <p className="text-justify">
            The dataset was cleaned and explored to identify patterns and anomalies. 
            Key metrics such as average sales, conversion rates, and channel effectiveness were calculated.
          </p>
          <p style={{ textAlign: "justify" }}>
            *For the dashboard setup, I organized and prepared a dataset summarizing monthly prospect status and marketing channel performance. It includes counts of open, discarded, and converted leads, along with effectiveness metrics for channels such as flags, banner, and billboard. This structured preparation enabled accurate visualization of lead quality, channel impact, and overall sales performance.*
          </p>
          <div className="mb-3">
            <img 
              src="/images/ic4.png"
              alt="Data Exploration" 
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>
          <p style={{ textAlign: "justify" }}>
            *This dataset captures detailed information about sales prospects, including reasons for purchase or non-purchase, decision-maker roles, prospect status, and demographic attributes such as employment status, profession, neighborhood, and age. It supports behavioral analysis of potential clients and helps identify patterns in decision-making, lead qualification, and advisor follow up outcomes.*
          </p>
          <div className="mb-3">
            <img 
              src="/images/ic5.png"
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
            <p style={{ textAlign: "justify" }}>
            *This dashboard powers the dashboard visualizing monthly sales effectiveness within the natural market segment. It includes total prospects, closed sales, average follow up days, and monthly conversion percentages. A bar chart displays the monthly sales conversion rate derived from 215 total prospects, showing how each month contributed to the overall 14% conversion average and highlighting fluctuations in sales performance over time.*
          </p>
            <img src="/images/ic6.png" alt="Chart 1" className="img-fluid rounded shadow-sm" style={{ maxHeight: "300px", objectFit: "cover" }} />
            <p style={{ textAlign: "justify" }}>
            *This dashboard continues the previous visualization by extending the natural market analysis into a weekly conversion funnel for the september cut off period. it summarizes managed prospects, open and discarded cases, weekly visit volume, and conversion outcomes across the defined weekly intervals. Media effectiveness rates for flags, banner, and billboard complement earlier insights on channel performance.*
          </p>
            <img src="/images/ic7.png" alt="Chart 2" className="img-fluid rounded shadow-sm" style={{ maxHeight: "260px", objectFit: "cover" }} />
            <p style={{ textAlign: "justify" }}>
            *This dashboard complements previous visualizations by detailing advisor performance, media conversion rates, client purchases, and rejection reasons. it adds behavioral insights to the natural market analysis using data from flags, banner, and billboard outreach.*
          </p>
            <img src="/images/ic8.png" alt="Chart 3" className="img-fluid rounded shadow-sm" style={{ maxHeight: "340px", objectFit: "cover" }} />
          </div>
        </section>

        {/* Key Findings Section */}
        <section className="mb-5">
          <h2>Key Findings</h2>
          <ul className="text-justify">
            <li>Patricia Martínez is the only advisor converting sales, achieving a 50% conversion rate with her assigned prospects in November.</li>
            <li>Overall conversion remains low at 14% from 215 total prospects due to the low inventory in the housing project.</li>
            <li>Nearly half of all prospects (47%) were discarded, with pricing concerns representing the largest rejection reason (34 cases).</li>
            <li style={{ textAlign: "justify" }}>A significant portion of lost prospects (30 cases, representing 29.7% of all discards) resulted from lack of response or insufficient follow up. If you want, I can help you update the rest of your insights with percentages as well so everything stays consistent.</li>
            <li style={{ textAlign: "justify" }}>Weekly visit activity is inconsistent, averaging only 2 visits per week, which limits conversion opportunities. A challenge intensified by low inventory, higher pricing, and limited payment plan flexibility due to immediate possession and slow moving units.
</li>
          </ul>
        </section>

        {/* Recommendations Section */}
        <section className="mb-5">
          <h2>Recommendations</h2>
          <ul className="text-justify">
            <li>Address pricing objections by improving value communication or offering clearer financing/subsidy options.</li>
            <li style={{ textAlign: "justify" }}>Increase investment in billboard and flag campaigns, as they show the strongest conversion performance, and expand digital marketing efforts (email marketing, social media, mobile first campaigns) since customers increasingly engage through their phones.</li>
            <li style={{ textAlign: "justify" }}>Reassign or coach low performing advisors, prioritizing those with 0% conversion, reinforcing follow up discipline, and introducing sales incentives or commission based motivators to boost performance and close more deals.</li>
            <li style={{ textAlign: "justify" }}>Strengthen follow up processes to reduce the 30 prospects lost due to no response, and implement verification steps to ensure customer information is accurate before assignment.</li>
            <li style={{ textAlign: "justify" }}>Set minimum weekly visit targets to stabilize activity and improve conversion consistency, and complement this with community oriented fairs and family events (free food, activities, etc.) to increase foot traffic and warm leads</li>
          </ul>
        </section>

        <Link to="/excel-projects" className="btn btn-custom mb-5">
          ← Back
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default IC;