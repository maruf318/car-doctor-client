// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
  // DRY --> Do not repeat yourself
  const services = useServices();
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch("https://car-doctor-serve-61.vercel.app/services")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setServices(res);
  //     });
  // }, []);
  return (
    <div className="mt-4 space-y-4">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#FF3811]">Service</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
