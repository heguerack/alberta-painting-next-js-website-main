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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.9804540011864!2d-113.95337842341479!3d50.92407857168656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371773f98224b4f%3A0xb012918acd574a36!2sAlberta%20Colour%20Painting%20Ltd.!5e0!3m2!1sen!2sin!4v1747742379662!5m2!1sen!2sin"
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
