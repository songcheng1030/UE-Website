import 'twin.macro';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SettingModal from './Modal/SettingModal'
import dotBlack from '../assets/images/Rectangle-black.png';
import frameBlack from '../assets/images/Frame-black.png'
import MenuBlack from '../assets/images/Menu-black.png'
import logo from '../assets/images/logo/logo-white.png';

export const navMenu = [
  { link: '#about', title: 'About' },
  { link: '#loadmap', title: 'Loadmap' },
  { link: '#team', title: 'Team' },
];

const Header1 = ({ menuOpened, onToggleMenu,}: {
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
    window.location.href = '/';
  }

  return (
    <header tw="w-full absolute top-0 z-30 border-b-2  border-b-[#C6D8DD]">
      <div tw="container mx-auto h-[100px] flex justify-between items-center">
        <div tw="flex items-center cursor-pointer border-r-2  border-r-[#C6D8DD]" onClick={goBanner}>
          <img alt="planet" src={logo} tw="w-[200px] h-[40px]"/>
          {/* <div tw="w-[140px] font-unbounded_earth text-[#121D1F] text-[18px] ml-[20px] leading-6">
            UNBOUNDED.
            EARTH
          </div> */}
        </div>
        <div tw="flex items-center pl-[150px]">
          <img alt="metamask" src={frameBlack}/>
          <div tw="ml-4 font-quattrocento text-lg text-center w-full font-bold text-black/80 uppercase">sound on</div>
        </div>
        <div tw="flex items-center font-bold font-quattrocento text-[18px] text-black/80 uppercase mr-[150px]">
          <div tw="cursor-pointer">Litepaper</div>
          <img alt="dotWhite" src={dotBlack} tw="w-[5px] h-[5px] mx-6"/>
          <a tw="cursor-pointer" href='/loadmap'>Loadmap</a>
        </div>
        <div tw="items-center gap-10 hidden md:flex cursor-pointer">
          <img alt="dotWhite" src={MenuBlack} tw="w-[33px] h-[33px]" onClick={showModal}/>
          <SettingModal isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel}></SettingModal>
        </div>
        {/* <Link to="#" tw="block md:hidden" onClick={() => onToggleMenu()}>
          <img alt="menu" src={menuOpened ? iconClose : iconMenu} />
        </Link> */}
      </div>
    </header>
  );
};

export default Header1;
 