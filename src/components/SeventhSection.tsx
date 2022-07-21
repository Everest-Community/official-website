import React from "react";
import Algo from "../assets/images/algorandalgo.png";
import Gecko from "../assets/images/Smart.png";
import Market from "../assets/images/coinmarketcap.png";
import Transcend from "../assets/images/Transcend.png";
import Pay from "../assets/images/pay.png";
import BoundlesspayLogo from "../assets/images/BoundlesspayLogo.png";

import sibon from "../assets/images/sibon.png";
import Thresh0ldLogo from "../assets/images/Thresh0ldLogo.png";
import algoExplorer from "../assets/images/algoExplorer.png";
import cars45 from "../assets/images/cars45.png";
import cryptoBootcamp from "../assets/images/cryptoBootcamp.png";
import infusionLawyers from "../assets/images/infusionLawyers.png";
import tinyman from "../assets/images/tinyman.png";

export default function SeventhSection() {
  return (
    <div className="w-full py-20 flex flex-col justify-center items-center">
      <div className="flex flex-wrap flex-row justify-center items-center">
        <div className="flex w-2/5 md:w-3/12 lg:w-auto p-4 mx-4 my-2 lg:my-6">
          <img src={Pay} alt="Pay" />
        </div>
        <div className="flex w-2/5 md:w-3/12 lg:w-auto p-4 lg:p-0 items-center mx-4 my-2 lg:my-6">
          <img src={Algo} alt="Algo" />
          <p className="font-CircularStd-Regular text-white ml-2 text-md">
            Algorand
          </p>
        </div>
        <div className="flex w-2/5 md:w-3/12 lg:w-auto p-4 lg:p-0 items-center mx-4 my-2 lg:my-6">
          <img src={Gecko} alt="gecko" />
        </div>
        <div className="flex w-2/5 md:w-3/12 items-center lg:w-auto p-4 lg:p-0 mx-4 my-2 lg:my-6">
          <img src={Market} alt="Market" className="mx-auto lg:mx-0" />
        </div>
        <div className="flex w-2/5 md:w-3/12 items-center lg:w-auto p-1 lg:p-0 mx-4 my-2 lg:my-6">
          <img src={Transcend} alt="Telegraph" className="mx-auto lg:mx-0" />
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-center items-center">
        <div className="flex w-2/5 md:w-3/12 items-center lg:w-auto p-1 lg:p-0 mx-4 my-2 lg:my-6">
          <img src={BoundlesspayLogo} className="w-36" alt="BoundlesspayLogo" />
        </div>
        <div className="flex w-2/5 md:w-3/12 items-center lg:w-auto p-1 lg:p-0 mx-4 my-2 lg:my-6">
          <img src={sibon} alt="Market" className="mx-auto w-36 lg:mx-0" />
        </div>
        <div className="flex w-2/5 md:w-3/12 items-center lg:w-auto p-1 lg:p-0 mx-4 my-2 lg:my-6">
          <img
            src={Thresh0ldLogo}
            alt="Telegraph"
            className="mx-auto lg:w-36 lg:mx-0"
          />
        </div>
        <div className="flex w-2/5 md:w-3/12 items-center lg:w-auto p-1 lg:p-0 mx-4 my-2 lg:my-6">
          <img
            src={algoExplorer}
            alt="Telegraph"
            className="mx-auto lg:w-36 lg:mx-0"
          />
        </div>
      </div>
      <div className="flex flex-wrap flex-row justify-center items-center">
        <div className="flex w-2/5 md:w-3/12 items-center lg:w-auto p-1 lg:p-0 mx-4 my-2 lg:my-6">
          <img
            src={cars45}
            alt="Telegraph"
            className="mx-auto lg:w-36 lg:mx-0"
          />
        </div>
        <div className="flex w-2/5 md:w-3/12 items-center lg:w-auto p-1 lg:p-0 mx-4 my-2 lg:my-6">
          <img
            src={cryptoBootcamp}
            alt="Telegraph"
            className="mx-auto lg:w-36 lg:mx-0"
          />
        </div>
        <div className="flex w-2/5 md:w-3/12 items-center lg:w-auto p-1 lg:p-0 mx-4 my-2 lg:my-6">
          <img
            src={infusionLawyers}
            alt="Telegraph"
            className="mx-auto lg:w-36 lg:mx-0"
          />
        </div>
        <div className="flex w-2/5 md:w-3/12 items-center lg:w-auto p-1 lg:p-0 mx-4 my-2 lg:my-6">
          <img
            src={tinyman}
            alt="Telegraph"
            className="mx-auto lg:w-36 lg:mx-0"
          />
        </div>
      </div>
    </div>
  );
}
