// Single.js
const Single = ({ image, name, bgColor , onClick}) => {
    return (
      <div className={`flex gap-4 items-center p-4 rounded-lg shadow-md cursor-pointer`}  onClick={onClick} style={{ backgroundColor: bgColor }}>
        <img
          src={image}
          alt={name}
          className="w-16  rounded-2xl object-cover"
        />
        <h2 className="text-lg font-bold">{name}</h2>
      </div>
    );
  };
  
  export default Single;
  