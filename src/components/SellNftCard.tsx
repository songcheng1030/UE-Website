import { styled } from "twin.macro";
import { useState, useEffect } from "react";
import img2 from "../assets/images/icon/check-mark-blue.svg";
import { GOwnedNft } from "../types";
import { imageConvert } from "../utils/helpers";

const SellNftCard = (props: { nft: GOwnedNft }) => {
  const nft: GOwnedNft = props.nft;
  const [selectCard, setSelectCard] = useState<boolean>(false);
  const [selectCardImg, setSelectCardImg] = useState<string>("");

  useEffect(() => {
    setSelectCardImg(`url('${imageConvert(nft?.metadata?.image)}')`);
  }, [nft]);

  const onMouseEnter = () => {
    setSelectCard(true);
    setSelectCardImg(
      `linear-gradient(to top,rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url('${imageConvert(
        nft?.metadata?.image
      )}')`
    );
  };
  const onMouseLeave = () => {
    setSelectCard(false);
    setSelectCardImg(`url('${imageConvert(nft?.metadata?.image)}')`);
  };

  const CardImage = styled.div(() => ({
    backgroundImage: `${selectCardImg}`,
    width: "100%",
    height: "262px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    backgroundSize: "cover",
  }));

  const goSell = () => {
    window.location.href = `/sell/detail/${nft.contract.address}/${Number(
      nft.id.tokenId
    )}`;
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      tw="relative bg-[#fbfbfb] border border-solid border-zinc-200 rounded-lg"
    >
      {selectCardImg !== "" ? (
        <CardImage>
          {selectCard && (
            <div tw="grid grid-cols-2 gap-2 mx-3 pt-[200px]">
              <button
                onClick={goSell}
                tw="bg-white text-violet-200 font-semibold text-xs mx-1 py-2 px-5 rounded border border-solid border-white"
              >
                Sell
              </button>
              {/* <button tw="bg-white text-violet-200 font-semibold text-xs mx-1 py-2 px-5 rounded border border-solid border-white">
              Transfer
            </button> */}
              <button tw="text-[#C1A3C1] bg-[#D6C1D6] text-xs font-semibold py-2 px-5 rounded border border-[#C1A3C1]">
                Transfer
              </button>
            </div>
          )}
        </CardImage>
      ) : (
        <div tw="w-full h-52 rounded-t-lg bg-zinc-300 animate-pulse"></div>
      )}
      <div tw="px-3 py-3">
        <div tw="flex justify-between">
          <div tw="flex items-center">
            <img alt="metamask" src={img2} tw="w-3 h-3 mr-1" />
            <div tw="text-gray-700 text-xs">{nft?.title}</div>
          </div>
          <div tw="text-gray-700 text-xs">{}</div>
        </div>
        <div tw="flex justify-between mt-1">
          <div tw="text-gray-300 text-xs font-semibold">
            {nft?.metadata?.name ? nft?.metadata?.name : nft?.title}
          </div>
          <div tw="flex items-center">
            {/* <img alt="metamask" src={img3} tw="w-3 h-3 mr-1"/> */}
            <div tw="text-gray-300 text-xs font-semibold">{}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellNftCard;

export const NftCoin = (props: { label: string; value: number }) => {
  return (
    <div>
      <div tw="text-zinc-400 text-xs text-center">{props.label}</div>
      <div>
        {/* <FontAwesomeIcon icon={['fab', 'ethereum']} size={'xs'} /> */}
        {/* <Icon name="btc" size={25} /> */}
        <div tw="text-gray-400 text-sm text-center">{props.value}</div>
      </div>
    </div>
  );
};
