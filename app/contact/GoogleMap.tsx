import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div className=" container mx-auto py-12 ">
      <h2 className="text-center text-[#0D378D] text-[36px] leading-[46.34px] font-semibold tracking-normal">
        FIND US
      </h2>
      <div className="flex justify-center mt-8">
        <div className="w-full md:w-10/12 sm:w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.060696318819!2d-114.07189928389878!3d51.04468107951424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717c7c25c49999%3A0x8d18fcb74885ea83!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1634160276765!5m2!1sen!2sus"
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded-[40px] border-[15px] border-solid "
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
