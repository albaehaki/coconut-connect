import React from "react";
// import { StaticImage } from "gatsby-plugin-image";

const WhyUsSection = () => {
  const container = ` py-5 rounded-xl sm:w-2/12 bg-[#eaeaea] relative`;
  const imgIcon = `mx-10 w-2/3`;
  const judul = `font-bold text-xl text-[#F9A828] mx-5  text-center relative`;
  const deskripsi = `text-xs text-[#007F4F] mx-5 text-center relative bottom-0`;
  return (
    <>
      <div className="pb-20 sm:px-20 px-10 pt-10 bg-[#007F4F]">
        <h2 className="font-bold text-4xl text-[#F9A828] mb-10 text-center">
          Why Choose Us
        </h2>
        <div className="flex gap-5 justify-evenly sm:flex-row flex-col">
          <div className={container}>
            <img className={imgIcon} src="./images/price.png" />
            <p className={judul}>Competitive Pricing</p>
            <p className={deskripsi}>
              Competitive pricing for quality, strategic business decisions,
              increased profits.
            </p>
          </div>
          <div className={container}>
            <img
              className={imgIcon}
              src="./images/quality-assurance.png"
            />
            <p className={judul}>Quality Assurance</p>
            <p className={deskripsi}>
              Our quality assurance ensures material excellence for customer
              satisfaction.
            </p>
          </div>
          <div className={container}>
            <img
              className={imgIcon}
              src="./images/customer-service (1).png"
            />
            <p className={judul}>Customer Servis</p>
            <p className={deskripsi}>
              Relax and let us handle your order with timely delivery.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUsSection;
