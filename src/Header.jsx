import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header-custom d-flex justify-content-between align-items-center">
      {/* Left - Logo as a Link */}
      <Link to="/">
        <img src="/images/m-logo.png" alt="Logo" className="header-logo" />
      </Link>

      {/* Center - Title */}
      <div className="header-center text-center flex-grow-1">
        Felipe Mora - Data Portfolio
      </div>

      {/* Right - Tools */}
      <div className="header-right text-end">
        Python | SQL | Power BI | Excel
      </div>
    </nav>
  );
};

export default Header;