import tw from "twin.macro";
import RectangleBlue from "../assets/images/Rectangle-blue.png";

const Payment = () => {
  const openPaymentWindow1 = () => {
    const paymentUrl =
      "https://pay.nmkr.io/?p=35c364e083c848a5852fcdb9902f4e70&c=1";

    // Specify the popup width and height
    const popupWidth = 500;
    const popupHeight = 700;

    // Calculate the center of the screen
    const left = '10px'; //window.top.outerWidth / 2 + window.top.screenX - popupWidth / 2;
    const top = '10px'; //window.top.outerHeight / 2 + window.top.screenY - popupHeight / 2;

    const popup = window.open(
      paymentUrl,
      "NFT-MAKER PRO Payment Gateway",
      `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`
    );

    // Show dim background    
    // document.body.style = "background: rgba(0, 0, 0, 0.5)";

    // Continuously check whether the popup has been closed
    const backgroundCheck = setInterval(function () {
      // if (popup.closed) {
      //   clearInterval(backgroundCheck);

      //   console.log("Popup closed");

      //   // Remove dim background
      //   document.body.style = "";
      // }
    }, 1000);
  }
  return (
    <div tw="relative lg:mt-[200px] md:mt-[60px] sm:mt-[57px] mt-[50px]">
      <div tw="relative container mx-auto lg:pb-[150px] md:pb-[50px] sm:pb-[40px] pb-[40px]">
        <div tw="lg:grid lg:grid-cols-3 items-start lg:ml-[0px] md:ml-[20px] sm:ml-[10px] ml-[30px]">
          <div tw="lg:col-span-1 flex items-center mt-3">
            <img alt="metamask" src={RectangleBlue} />
            <div tw="font-quattrocento xl:text-[30px] md:text-[26px] sm:text-[21px] text-[16px] font-bold text-[#2B393E] uppercase ml-2.5">
              Payment
            </div>
          </div>
          <div tw="col-span-2 lg:mt-0 md:mt-[20px] mt-[10px]">
            <div tw="font-unbounded_earth font-normal xl:text-[38px] md:text-[30px] sm:text-[24px] text-[19px] text-[#121D1F] uppercase">
              Gladiator Genesis – Weapons Collection Mint
            </div>
            <div tw="font-quattrocento text-gray-50/50 lg:text-[22px] md:text-[20px] sm:text-[18px] text-[15px] lg:mt-[24px] md:mt-[20px] sm:mt-[17px] mt-[14px]"></div>
          </div>
        </div>
        <div>
          <img
            src="https://studio.nmkr.io/images/buttons/paybutton_1_1.svg"
            tw="cursor-pointer"
            onClick={openPaymentWindow1}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
