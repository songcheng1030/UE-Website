import "twin.macro";
import { useState } from "react";

import { Modal, Button } from "antd";
import { showNotification } from "../../utils/helpers";
import { Divider, Select, Input } from "antd";
import dot from "../../assets/images/green/dot.png";
import cancelGreen from "../../assets/images/green/cancel-green.png";
import burger1 from "../../assets/images/burger1.png";
import burger2 from "../../assets/images/burger2.png";
import burger3 from "../../assets/images/burger3.png";
import burger4 from "../../assets/images/burger4.png";
import burger5 from "../../assets/images/burger5.png";
import burger6 from "../../assets/images/burger6.png";
import twitter from "../../assets/images/icons/twitter.svg";
import youtube from "../../assets/images/icons/youtube.png";
import twitch from "../../assets/images/icons/twitch.png";
import discord from "../../assets/images/icons/discord.png";
import logo from "../../assets/images/logo/logo1-white.png";

const SettingModal = (props: {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}) => {
  const { Option } = Select;

  const [selectWallet, setSelectWallet] = useState<string>("metamask");
  const [balance, setBalance] = useState(0);

  const handleChange = (value: string) => {
    setSelectWallet(value);
  };

  const goProfileDashboard = () => {
    window.location.href = `/profile/dashboard`;
  };

  const goProfileEdit = () => {
    window.location.href = "/profile/edit";
  };

  const onDisconnet = async () => {
    showNotification("Wallet Disconnected.");
    localStorage.clear();
    window.location.href = "/wallet";
  };

  const goBanner = () => {
    window.location.href = "/buy/raffles";
  };

  const goLink = (url: string) => {
    window.location.href = url;
  };

  return (
    <Modal
      tw=""
      closable={false}
      maskClosable={false}
      closeIcon={null}
      visible={props.isModalVisible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      footer={null}
      width={1400}
    >
      <div tw="lg:px-[140px] md:px-[100px] sm:px-[60px] px-[30px] w-full h-[100px] flex justify-between items-center border-b-[1px] border-[#3D4B4C]">
        <a tw="flex items-center cursor-pointer" href="/">
          <img
            alt="planet"
            onClick={goBanner}
            src={logo}
            tw="xl:w-[72px] lg:w-[68px] md:w-[55px] sm:w-[50px] w-[40px] xl:h-[72px] lg:h-[68px] md:h-[55px] sm:h-[50px] h-[40px]"
          />
        </a>
        <div tw="flex items-center  text-[#5F7874] font-bold font-quattrocento lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] uppercase">
          <a tw="cursor-pointer" href="/litepaper">
            Litepaper
          </a>
          <img alt="dotWhite" src={dot} tw="w-[5px] h-[5px] mx-6" />
          <a tw="cursor-pointer" href="/roadmap">
            Roadmap
          </a>
        </div>
        <div tw="items-center lg:gap-10 md:gap-5 gap-3 flex cursor-pointer">
          <img
            alt="dotWhite"
            src={cancelGreen}
            tw="lg:w-[28px] md:w-[20px] sm:w-[16px] w-[14px] lg:h-[28px] md:h-[20px] sm:h-[16px] h-[14px]"
            onClick={props.handleCancel}
          />
        </div>
      </div>

      <div tw="relative mx-auto lg:py-[100px] md:py-[80px] sm:py-[70px] py-[50px] lg:px-[140px] md:px-[80px] sm:px-[70px] px-[50px]">
        <div tw="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-start lg:gap-[40px] md:gap-[30px] sm:gap-[20px] gap-[15px] lg:text-base md:text-[15px] sm:text-[14px] text-[13px]">
          <a tw="relative cursor-pointer" href="/buy">
            <img tw="w-full" alt="burger2" src={burger2} />
            <div tw="absolute bottom-[10%] left-[10%] font-quattrocento font-bold text-[#DAE7EB] uppercase ml-2.5">
              Buy
            </div>
          </a>
          <a
            tw="relative cursor-pointer"
            href="/stake"      
          >
            <img tw="w-full" alt="burger5" src={burger5} />
            <div tw="absolute bottom-[10%] left-[10%] font-quattrocento font-bold text-[#DAE7EB] uppercase ml-2.5">
              Stake
            </div>
          </a>
          <a
            tw="relative cursor-pointer"
            href="https://explorer.unbounded.earth"
            target="_blank"
          >
            <img tw="w-full" alt="burger4" src={burger4} />
            <div tw="absolute bottom-[10%] left-[10%] font-quattrocento font-bold text-[#DAE7EB] uppercase ml-2.5">
              World Map Explorer
            </div>
          </a>
          <a
            tw="relative cursor-pointer"
            href="/roadmap"       
          >
            <img tw="w-full" alt="burger6" src={burger6} />
            <div tw="absolute bottom-[10%] left-[10%] font-quattrocento font-bold text-[#DAE7EB] uppercase ml-2.5">
              Roadmap
            </div>
          </a>
          <a
            tw="relative cursor-pointer"
            href="/litepaper"
          >
            <img tw="w-full" alt="burger3" src={burger3} />
            <div tw="absolute bottom-[10%] left-[10%] font-quattrocento font-bold text-[#DAE7EB] uppercase ml-2.5">
              Litepaper / EarthPaper
            </div>
          </a>
          <a
            tw="relative cursor-pointer"
            href="/faq"   
          >
            <img tw="w-full" alt="burger1" src={burger1} />
            <div tw="absolute bottom-[10%] left-[10%] font-quattrocento font-bold text-[#DAE7EB] uppercase ml-2.5">
              Faq
            </div>
          </a>
          {/* <div tw="relative cursor-pointer" onClick={goBlog}>
            <img tw="w-full" alt="burger2" src={burger2}/>
            <div tw="absolute bottom-[24px] left-[24px] font-quattrocento text-base font-bold text-[#DAE7EB] uppercase ml-2.5">
              Blog
            </div>
          </div> */}

          {/* <div tw="relative cursor-pointer" onClick={goForums}>
            <img tw="w-full" alt="burger5" src={burger5}/>
            <div tw="absolute bottom-[24px] left-[24px] font-quattrocento text-base font-bold text-[#DAE7EB] uppercase ml-2.5">
              Forums
            </div>
          </div> */}
        </div>
        <div tw="lg:mt-[80px] md:mt-[60px] sm:mt-[40px] mt-[20px]">
          <div tw="text-center">
            <div tw="font-quattrocento text-[#5F7874] lg:text-lg md:text-[15px] sm:text-[14px] text-[12px] font-bold">
              Follow our updates:
            </div>
          </div>
          <div tw="flex justify-center items-center lg:mt-4 mt-2">
            <a
              tw="bg-[#334745] lg:w-[55px] md:w-[46px] sm:w-[40px] w-[34px] lg:h-[55px] md:h-[46px] sm:h-[40px] h-[34px] lg:p-[13px] md:p-[10px] sm:p-[8px] p-[6px] rounded-lg mr-3 cursor-pointer"
              target="_blank"
              href="https://discord.gg/unboundedearth"
            >
              <img alt="discord" tw="w-full h-full" src={discord} />
            </a>
            <a
              tw="bg-[#334745] lg:w-[55px] md:w-[46px] sm:w-[40px] w-[34px] lg:h-[55px] md:h-[46px] sm:h-[40px] h-[34px] lg:p-[13px] md:p-[10px] sm:p-[8px] p-[6px] rounded-lg mr-3 cursor-pointer"
              target="_blank"
              href="https://twitter.com/Unbounded_Earth"
            >
              <img alt="twitter" tw="w-full h-full" src={twitter} />
            </a>
            <a
              tw="bg-[#334745] lg:w-[55px] md:w-[46px] sm:w-[40px] w-[34px] lg:h-[55px] md:h-[46px] sm:h-[40px] h-[34px] lg:p-[13px] md:p-[10px] sm:p-[8px] p-[6px] rounded-lg mr-3 cursor-pointer"
              target="_blank"
              href="https://www.youtube.com/channel/UCHHdJsmdNPPOhkZteMCUnBw?sub_confirmation=1"
            >
              <img alt="youtube" tw="w-full h-full" src={youtube} />
            </a>
            <a
              tw="bg-[#334745] lg:w-[55px] md:w-[46px] sm:w-[40px] w-[34px] lg:h-[55px] md:h-[46px] sm:h-[40px] h-[34px] lg:p-[13px] md:p-[10px] sm:p-[8px] p-[6px] rounded-lg mr-3 cursor-pointer"
              target="_blank"
              href="https://www.twitch.tv/unboundedearth"
            >
              <img alt="twitch" tw="w-full h-full" src={twitch} />
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SettingModal;
