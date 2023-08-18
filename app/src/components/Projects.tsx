import { useEffect, useState } from "react";
import copyshop_browser from "../../public/assets/browser/copyshop_browser.webp";
import copyshop_mobile from "../../public/assets/browser/copyshop_browser.webp";

const Projects = ({ text }: any) => {
  const [images, setImages] = useState({
    copyshop: "",
  });

  useEffect(() => {
    if (window.screen.width < 800) {
      setImages({
        copyshop: copyshop_mobile,
      });
    } else {
      setImages({
        copyshop: copyshop_browser,
      });
    }
  }, [location.reload]);
  return (
    <div
      className="flex items-center flex-col w-full mt-[30px]
        md:mt-[100px]"
    >
      <div
        className="flex flex-col w-[90vw]
            md:w-[70vw]"
      >
        <h3
          id="projects"
          className="text-[13px] font-bold pb-[1.5vh]
                md:text-[30px]"
        >
          🚀 {text.title}
        </h3>

        <div
          className="flex w-full h-[20vh] 
        md:h-[50vh]"
        >
          <div className="flex justify-start items-center h-full w-[40%]">
            <img
              src={images.copyshop}
              alt="copyshop"
              className="animate-fade"
            />
          </div>
          <div className="flex flex-col justify-center items-end h-full w-[60%]">
            <p
              className="font-bold text-[10px] text-end
            md:text-[25px]"
            >
              {text.projects.copyshop.title}
            </p>
            <p
              className="text-[6px]
            md:text-[14px]"
            >
              {text.projects.copyshop.subtitle}
            </p>
            <div className="[&>p]:text-[8px] text-end md:[&>p]:text-[18px] md:pt-[8px]">
              {text.projects.copyshop.description?.map(
                (elem: any, key: any) => {
                  return <p key={key}>• {elem}</p>;
                }
              )}
            </div>
          </div>
        </div>

        <div
          className="w-full h-[20vh] bg-green-200
         md:h-[40vh]"
        ></div>

        <div
          className="w-full h-[20vh] bg-blue-200
        md:h-[40vh]"
        ></div>
      </div>
    </div>
  );
};

export default Projects;