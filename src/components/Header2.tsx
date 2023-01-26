import "twin.macro";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SettingModal from "./Modal/SettingModal";
import dotBlack from "../assets/images/Rectangle-black.png";
import MenuBlack from "../assets/images/Menu-black.png";
import logo from "../assets/images/logo/logo1-gold.png";
export const navMenu = [
  { link: "#about", title: "About" },
  { link: "#loadmap", title: "Loadmap" },
  { link: "#team", title: "Team" },
];

const Header1 = ({
  menuOpened,
  onToggleMenu,
}: {
  menuOpened: boolean;
  onToggleMenu: () => void;
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const goBanner = () => {
    window.location.href = "/";
  };

  return (
    <header tw="w-full absolute top-0 z-30">
      <div tw="xl:px-[150px] lg:px-[110px] md:px-[60px] sm:px-[20px] px-[10px] mx-auto h-[100px] grid grid-cols-3">
        <a tw="flex items-center cursor-pointer" href="/">
          <img
            alt="planet"
            src={logo}
            tw="xl:w-[80px] lg:w-[70px] md:w-[60px] sm:w-[50px] w-[40px] xl:h-[80px] lg:h-[70px] md:h-[60px] sm:h-[50px] h-[40px]"
          />
          {/* <div tw="w-[140px] font-unbounded_earth text-gray-50 lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] ml-[20px] leading-6">
            UNBOUNDED. EARTH
          </div> */}
        </a>
        <div tw="flex justify-center items-center font-bold font-quattrocento lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] text-gray-50 uppercase sm:gap-6 gap-3">
          <a tw="cursor-pointer" href='/litepaper'>Litepaper</a>
          <img alt="dotWhite" src={dotBlack} tw="w-[5px] h-[5px]"/>
          <a tw="cursor-pointer" href='/buy'>Mint/Buy</a>
          <img alt="dotWhite" src={dotBlack} tw="w-[5px] h-[5px]"/>
          <a tw="cursor-pointer" href="/roadmap">Roadmap</a>
        </div>
        <div tw="items-center gap-10 flex justify-end cursor-pointer">
          <img
            alt="dotWhite"
            src={MenuBlack}
            tw="lg:w-[33px] md:w-[30px] sm:w-[26px] w-[23px] lg:h-[33px] md:h-[30px] sm:h-[26px] h-[23px]"
            onClick={showModal}
          />
          <SettingModal
            isModalVisible={isModalVisible}
            handleOk={handleOk}
            handleCancel={handleCancel}
          ></SettingModal>
        </div>
        {/* <Link to="#" tw="block md:hidden" onClick={() => onToggleMenu()}>
          <img alt="menu" src={menuOpened ? iconClose : iconMenu} />
        </Link> */}
      </div>
    </header>
  );
};

export default Header1;
