import 'twin.macro';
import imgLogo from '../assets/images/logo/logo.svg';
import imgBeta from '../assets/images/logo/logo-beta.png';

const Banner = () => {
  const goWalletConnect = async() => {
    window.location.href = '/main';
  }
  
  return (
    <>
      <div tw="flex items-center justify-center mb-10">
        <img alt="logo" src={imgLogo} tw="w-[183px]"/>
        <img alt="logo" src={imgBeta} tw="w-[43px] ml-1"/>
      </div>
      <div tw='text-6xl text-gray-100 text-center mb-4 font-semibold'>
        Greater value for NFTS
      </div>
      <div tw='text-lg text-gray-300 text-center  mb-8'>
        Goobig is the most innovative NFT <span tw='text-lg text-gray-300 font-bold'>marketplace</span> designed to provide greater <br></br>
        options, liquidity and access for NFTs.
      </div>
      <div tw='py-4 flex justify-center items-center gap-4'>
        <button
          onClick={goWalletConnect} tw='bg-[#9C40CF] font-semibold text-white text-lg px-8 py-2.5 rounded border border-transparent hover:border-white'
        >
          Connect wallet 
        </button>
      </div>
    </>
  );
};

export default Banner;
