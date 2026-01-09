import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import PythonProjects from "./PythonProjects";
import SqlProjects from "./SqlProjects";
import PowerbiProjects from "./PowerbiProjects";
import ExcelProjects from "./ExcelProjects";
import IC from "./IC";
import VideoGames from "./VideoGames";
import Header from "./Header";
import Footer from "./Footer";
import RetailSales from "./RetailSales";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><Portfolio /><Footer /></>} />
        <Route path="/python-projects" element={<><Header /><PythonProjects /><Footer /></>} />
        <Route path="/sql-projects" element={<><Header /><SqlProjects /><Footer /></>} />
        <Route path="/powerbi-projects" element={<><Header /><PowerbiProjects /><Footer /></>} />
        <Route path="/excel-projects" element={<><Header /><ExcelProjects /><Footer /></>} />
        <Route path="/ic" element={<IC />} />
        <Route path="/retailsales" element={<RetailSales />} />
        <Route path="/videogames" element={<VideoGames />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;
