import React from "react";
import { Button } from "./ui/button";
import { useRouter } from 'next/navigation';

interface ServiceSectionProps {
  title: string;
  description: string;
  buttonText: string;
  isButton?: boolean;
  galleryText:string;
  galleryTextSec:string
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  buttonText,
  isButton = true,
  galleryText,
  galleryTextSec,
}) => {
  // Split the description by line breaks
  const descriptionLines = description.split("<br />");

  const router = useRouter();

  // Handle button click based on buttonText
  const handleButtonClick = () => {
    if (buttonText === "View All") {
      router.push("/gallery"); // Navigate to /gallery page
    } else if (buttonText === "Explore Our Services") {
      router.push("/services"); // Navigate to /services page
    } else if (buttonText === "Read More Reviews") {
      router.push("/reviews"); // Navigate to /reviews page
    }
  };
  return (
    <section className="bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <p className="text-[18px] text-black font-medium lg:text-[22px]">{title}</p>
        <div className="flex flex-col justify-between mb-8 md:flex-row">
       
          <h2 className="text-[#0D378D] text-[26px] font-semibold lg:text-[36px] uppercase">
            {descriptionLines.map((line, index) =>{
              console.log("line",line)
              return(
                (
                  <React.Fragment key={index}>
                    {line}
                    {index < descriptionLines.length - 1 && <br />}
                  </React.Fragment>
                )
              )
            })}
          </h2>
        
       
        
          {isButton &&
          <div className="flex md:mt-0 mt-4">
            <Button
              variant="default"
              className="bg-[#0D378D] rounded-3xl cursor-pointer px-10 py-5"
              onClick={handleButtonClick}
            >
              {buttonText}
            </Button>

          </div>
}
        </div>
        <p className="text-black text-[18px]">{galleryText}</p>
        <br></br>
        <p className="text-black text-[18px]">{galleryTextSec}</p>
      </div>
    </section>
  );
};

export default ServiceSection;
