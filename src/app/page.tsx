import ProjectCard from "@/components/ProjectCard";
import { FaArrowDownLong } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="w-[200vw] lg:w-full ">
      {/* hero section */}
      <div className="flex flex-col lg:flex-row items-center lg:px-20 h-[70vh]">
        <div className="lg:w-[45%] lg:my-0 mt-16">
          <h1 className="font-[500]  text-[60px] leading-[58.32px] ">
            Hello, I&apos;m <br /> Mehmet Akif.
          </h1>
        </div>
        <div className="mx-auto px-8 lg:px-0  md:w-[55%] text-[30px] mt-24">
          <p className="font-normal  leading-[37.44px]  text-[#606060]">
            A senior-year design student who trying to specialize in 3D modeling
            & texturing.
          </p>
        </div>
      </div>

      <div className="px-20 -mt-9  mb-36">
        <p className="text-5xl">
          <FaArrowDownLong />
        </p>
      </div>
      {/* 1st Card  */}

      <ProjectCard
        cardNo="01 "
        cardTilte=" PROJECT NAME"
        cardParagraph="Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development."
        cardSpan="Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold."
        cardLink="More shots from This Project"
        
      />

      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717] " />

      {/* 2nd card  */}

      <ProjectCard
        cardNo="02"
        cardTilte=" PROJECT NAME"
        cardParagraph="Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques."
        cardSpan="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardLink="See case study"
      
      />
      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717] m-24" />
      {/* 3rd card  */}

      <ProjectCard
        cardNo="03"
        cardTilte=" PROJECT NAME"
        cardParagraph="Experimental creature modeling for school project."
        cardSpan="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque."
        cardLink="Project WIP "
        
      />
      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717] m-24 mb-44" />
    </div>
  );
}
