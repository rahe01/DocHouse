
import { Link } from "react-router-dom";

const MenuItem = ({ label, address, icon }) => {
  return (
    <Link
      to={address}
      className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
    >
      {icon && <div className="mr-3">{icon}</div>}
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default MenuItem;
