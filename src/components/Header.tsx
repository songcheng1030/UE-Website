import "twin.macro";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SettingModal from "./Modal/SettingModal";
import dotWhite from "../assets/images/Rectangle-white.png";
import dotBlack from "../assets/images/Rectangle-black.png";
import menu from "../assets/images/Menu.png";
import logo from "../assets/images/logo/logo1-white.png";
import { useMediaQuery } from "react-responsive";

export const navMenu = [
  { link: "#about", title: "About" },
  { link: "#loadmap", title: "Loadmap" },
  { link: "#team", title: "Team" },
];

const Header = ({
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

  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isPadorPhone = useMediaQuery({ query: "(max-width: 1279px)" });

  return (
    <header tw="w-full absolute top-0 z-30">
      <div tw="container mx-auto h-[100px] grid grid-cols-3">
        <a tw="flex items-center cursor-pointer" href="/" >
          <img
            alt="planet"
            src={logo}
            tw="xl:w-[80px] lg:w-[70px] md:w-[60px] sm:w-[50px] w-[40px] xl:h-[80px] lg:h-[70px] md:h-[60px] sm:h-[50px] h-[40px]"
          />
          {/* <div tw="lg:w-[140px] md:w-[100px] sm:w-[70px] w-[50px] font-unbounded_earth text-white/80 lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] ml-[20px] leading-6">
            UNBOUNDED. EARTH
          </div> */}
        </a>
        <div tw="flex justify-center items-center font-bold font-quattrocento lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] xl:text-[#121D1F] text-white/80 uppercase sm:gap-6 gap-3 ">
          <a tw="flex justify-center cursor-pointer" href="/litepaper">
            Litepaper
          </a>
          {isDesktop && (
            <img alt="dotWhite" src={dotBlack} tw="w-[5px] h-[5px]" />
          )}
          {isPadorPhone && (
            <img alt="dotWhite" src={dotWhite} tw="w-[5px] h-[5px]" />
          )}
          <a tw="flex justify-center cursor-pointer" href="/buy">
            Mint/Buy
          </a>
          {isDesktop && (
            <img alt="dotWhite" src={dotBlack} tw="w-[5px] h-[5px]" />
          )}
          {isPadorPhone && (
            <img alt="dotWhite" src={dotWhite} tw="w-[5px] h-[5px]" />
          )}
          <a tw="flex justify-center cursor-pointer" href="/roadmap">
            Roadmap
          </a>
        </div>
        <div tw="items-center gap-10 flex justify-end cursor-pointer">
          <img
            alt="dotWhite"
            src={menu}
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

export default Header;
