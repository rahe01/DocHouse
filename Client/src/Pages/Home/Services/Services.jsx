import { TabsDefault } from "./Tabs";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 my-10 md:my-20">
      <div>
        <img
          src="https://i.ibb.co/Lkz5kvX/pexels-shvetsa-3845729.jpg"
          alt=""
          className=" hidden md:block rounded-2xl"
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold text-center md:text-start">Our Services</h1>

        <p className="py-6 font-normal text-lg text-center md:text-start">Transform your smile with our cosmetic dentistry services. From teeth whitening to veneers, we offer a variety of treatments designed to enhance the appearance of your teeth. Our skilled professionals use the latest techniques to give you a smile you’ll be proud to show off.</p>
        <TabsDefault></TabsDefault>
        
      </div>
    </div>
  );
};

export default Services;
