import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ContainerType = {
  productMarketingMonopoly?: string;
  market?: string;
  fastPerformance?: string;
  image?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
};

const Container: NextPage<ContainerType> = ({
  productMarketingMonopoly,
  market,
  fastPerformance,
  image,
  propLeft,
}) => {
  const div3Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[10px] left-[0px] w-[447px] h-[445px] opacity-[0.8] text-left text-base text-darkslategray font-dm-sans"
      style={div3Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white shadow-[0px_4px_10px_rgba(39,_83,_123,_0.12)] w-[447px] h-[445px]" />
      <div className="absolute top-[401px] left-[317px] leading-[26px] text-center flex items-center justify-center w-[100px] h-3.5 opacity-[0.8]">
        Sep 20, 2019
      </div>
      <b className="absolute top-[316px] left-[30px] text-xl leading-[30px] flex text-gray-100 items-center w-[387px] h-[51px]">
        <span className="[line-break:anywhere] w-full">
          <p className="[margin-block-start:0] [margin-block-end:1px]">{`Product Marketing: Monopoly `}</p>
          <p className="m-0">Market</p>
        </span>
      </b>
      <div className="absolute top-[397px] left-[30px] text-lg leading-[30px] font-medium text-crimson flex items-center w-[141px] h-[18px]">
        {fastPerformance}
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[447px] h-[286px] object-cover"
        alt=""
        src={image}
      />
    </div>
  );
};

export default Container;
