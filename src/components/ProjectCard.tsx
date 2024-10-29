
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const ProjectCard = ({
  cardNo,
  cardTilte,
  cardParagraph,
  cardSpan,
  cardLink,
  
}: {
  cardNo: string;
  cardTilte: string;
  cardParagraph: string;
  cardSpan: string;
  cardLink: string;
  
}) => {
  return (
    <div className="flex  flex-col justify-between lg:flex-row lg:gap-32 mx-20 h-[85vh] lg:h-[70vh] lg:my-[110px] my-[55px]">
      {/* project content */}
      <div className="flex flex-col justify-between text-start  w-[356px]">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-2xl font-semibold">
              {cardNo}/{cardTilte}{" "}
            </h2>
          </div>
          <div>
            <p className="text-xl ">{cardParagraph}</p>
          </div>

          <div>
            <span className="text-[#606060]">{cardSpan}</span>
          </div>
        </div>
        <div className="project-link my-9 lg:m-0 flex font-semibold underline">
          <p> {cardLink}</p>
          <div className="text-sm ml-1 mt-1">
            <GoArrowUpRight />
          </div>
        </div>
      </div>

      {/* project Image */}
      <div className="lg:w-[680px]  w-full">
        <Image
          className=" bg-[#606060] "
          src=""
          alt=""
          width={640}
          height={370}
                  
        />
      </div>
    </div>
  );
};

export default ProjectCard;
