import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";

const Card = ({ data, image, desc, id }) => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl ">
        <figure>
          <img src={image} alt={data} className="w-full h-64 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data}</h2>
          <p>{desc}</p>
          <div className="card-actions">
            <Link className="w-full" to={`/services/${id}`}>
              <Button title={"View Details"}></Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
