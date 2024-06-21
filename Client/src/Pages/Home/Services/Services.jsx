import { TabsDefault } from "./Tabs";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
      <div>
        <img
          src="https://i.ibb.co/R94TQR7/pexels-tima-miroshnichenko-5407206.jpg"
          alt=""
          className=""
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold">Our Services</h1>

        <p className="py-6 font-medium text-lg">Transform your smile with our cosmetic dentistry services. From teeth whitening to veneers, we offer a variety of treatments designed to enhance the appearance of your teeth. Our skilled professionals use the latest techniques to give you a smile you’ll be proud to show off.</p>
        <TabsDefault></TabsDefault>
        
      </div>
    </div>
  );
};

export default Services;
