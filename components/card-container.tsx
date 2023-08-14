import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type CardContainerType = {
  ellipse1?: string;
  businessClass?: string;
  forSmallTeamsOrOffice?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propTop?: CSSProperties["top"];
};

const CardContainer: NextPage<CardContainerType> = ({
  ellipse1,
  businessClass,
  forSmallTeamsOrOffice,
  propLeft,
  propTop,
}) => {
  const div1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  return (
    <div
      className="absolute top-[220px] left-[0px] w-[170px] h-[209px] text-center text-3xl text-gray-100 font-dm-sans"
      style={div1Style}
    >
      <img
        className="absolute top-[0px] left-[20px] rounded-[50%] w-[130px] h-[130px] object-cover"
        alt=""
        src={ellipse1}
      />
      <b className="absolute top-[160px] left-[0px] tracking-[-0.55px] flex items-center justify-center w-[170px] h-[18px]">
        {businessClass}
      </b>
      <div className="absolute top-[193px] left-[10px] text-base leading-[28px] text-darkslategray flex items-center justify-center w-[150px] h-4">
        {forSmallTeamsOrOffice}
      </div>
    </div>
  );
};

export default CardContainer;
