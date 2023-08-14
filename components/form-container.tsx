import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type FormContainerType = {
  bG?: string;
  modernLookTrendingDesign?: string;
  ellipse?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propOpacity?: CSSProperties["opacity"];
};

const FormContainer: NextPage<FormContainerType> = ({
  bG,
  modernLookTrendingDesign,
  ellipse,
  propLeft,
  propOpacity,
}) => {
  const div2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      opacity: propOpacity,
    };
  }, [propLeft, propOpacity]);

  return (
    <div
      className="absolute top-[168px] left-[460px] w-[422px] h-[402px] overflow-hidden text-left text-base text-darkslategray font-dm-sans"
      style={div2Style}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[422px] h-[402px]"
        alt=""
        src={bG}
      />
      <div className="absolute top-[124px] left-[40px] text-lg leading-[38px] inline-block w-[368px] h-[146px]">{`Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.`}</div>
      <b className="absolute top-[71px] left-[40px] leading-[33px] flex items-center w-[250px] h-[33px]">
        {modernLookTrendingDesign}
      </b>
      <b className="absolute top-[301px] left-[114px] tracking-[-0.4px] leading-[40px] flex text-gray-100 items-center w-[142px] h-10">
        Denny Hilguston
      </b>
      <div className="absolute top-[324.5px] left-[114px] text-mini tracking-[-0.37px] leading-[40px] font-medium text-crimson flex items-center w-[100px] h-10">
        @denny.hil
      </div>
      <div className="absolute top-[33px] left-[40px] tracking-[1.6px] leading-[32px] font-font-awesome-5-free flex items-center w-[126px] h-8 text-crimson">
        <span className="[line-break:anywhere] w-full">
          <span></span>
          <span className="text-gainsboro"></span>
        </span>
      </div>
      <img
        className="absolute top-[306px] left-[40px] rounded-[50%] w-[55px] h-[55px] object-cover"
        alt=""
        src={ellipse}
      />
    </div>
  );
};

export default FormContainer;
