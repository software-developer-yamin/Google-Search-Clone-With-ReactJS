import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ContainerCardFormFilterType = {
  combinedShape16072?: string;
  combinedShape16073?: string;
  combinedShape16074?: string;
  combinedShape16075?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const ContainerCardFormFilter: NextPage<ContainerCardFormFilterType> = ({
  combinedShape16072,
  combinedShape16073,
  combinedShape16074,
  combinedShape16075,
  propTop,
}) => {
  const featuresStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[143px] left-[40px] w-[211px] h-36 text-left text-base text-darkslategray font-dm-sans"
      style={featuresStyle}
    >
      <img className="relative w-5 h-5" alt="" src={combinedShape16072} />
      <img className="relative w-5 h-5" alt="" src={combinedShape16073} />
      <img className="relative w-5 h-5" alt="" src={combinedShape16074} />
      <img className="relative w-5 h-5" alt="" src={combinedShape16075} />
      <div className="absolute top-[1px] left-[34px] leading-[42px] font-medium flex items-center w-[177px] h-[140px]">{`Drag & Drop Builder 1,000's of Templates Blog Support Tools eCommerce Store `}</div>
    </div>
  );
};

export default ContainerCardFormFilter;
