import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type AssemblyCardType = {
  fastPerformance?: string;
  roundedRectangle528Copy?: string;
  fastPerformance1?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
};

const AssemblyCard: NextPage<AssemblyCardType> = ({
  fastPerformance,
  roundedRectangle528Copy,
  fastPerformance1,
  propLeft,
  propWidth,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const fastPerformanceStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="absolute top-[280px] left-[675px] w-[263px] h-[294px] text-left text-3xl text-white font-dm-sans"
      style={divStyle}
    >
      <div
        className="absolute top-[97px] left-[0px] leading-[155%] font-medium inline-block w-[263px]"
        style={fastPerformanceStyle}
      >
        {fastPerformance}
      </div>
      <div className="absolute top-[181px] left-[0px] text-mini leading-[26px] inline-block w-[263px] h-[113px]">
        Get your blood tests delivered at home collect a sample from the your
        blood tests.
      </div>
      <div className="absolute top-[0px] left-[1px] w-[72px] h-[72px] text-11xl text-crimson font-lexend-deca">
        <img
          className="absolute top-[-5px] left-[-19px] w-[110px] h-[110px]"
          alt=""
          src={roundedRectangle528Copy}
        />
        <div className="absolute top-[19px] left-[19px]">
          {fastPerformance1}
        </div>
      </div>
    </div>
  );
};

export default AssemblyCard;
