import 'twin.macro';
import ProgressBar from '@ramonak/react-progress-bar';
import { useState, useEffect } from 'react';
import { GRaffles } from '../types';
import { leftDate, getRafflePrice } from '../utils/helpers';
import { imageConvert } from "../utils/helpers";

import eth from '../assets/images/icon/eth-icon.svg';

const NftCard = (props: {raffle: GRaffles, state: string}) => {
  const raffle: GRaffles = props.raffle;
  const [nftInfo, setNftInfo] = useState<any>();
  const [apiCount, setApiCount] = useState(0);

  // const nft = useSelector(selectNftByTokenId);
  // const getNftInfo = async() => {
  //   try {
  //     const nft = await assetsService.getAssetById(raffle.nftAddress, Number(raffle.tokenId));
  //     setNftInfo(nft);
  //   } catch (e) {
  //     if (apiCount < 10) {
  //       setApiCount(apiCount + 1);
  //       setTimeout(() => {
  //         getNftInfo();
  //       }, 100);
  //     }
  //   }
  // }
  
  const leftTime = leftDate(Number(raffle.created), Number(raffle.duration));

  const goRaffleDetail = () => {
    if (props.state === "buy"){
      window.location.href = `/buy/raffles/${raffle.raffleId}`;
    }else if(props.state === "listed"){
      window.location.href = `/profile/listed/${raffle.raffleId}`;
    }
  }
  
  return (
    <div tw="bg-[#fbfbfb] border border-solid border-zinc-200 rounded-lg cursor-pointer" onClick={goRaffleDetail}>
      {nftInfo?.metadata?.image?(
        <div tw="w-full h-[207px] rounded-t-lg overflow-hidden">
          <img
            alt="metamask"
            src={imageConvert(nftInfo?.metadata?.image)}
            tw="rounded-t-lg"
          />
        </div> 
        
      ):(
        <div tw="w-full h-52 rounded-t-lg bg-zinc-300 animate-pulse"></div>  
      )}
      <div tw="px-3 py-4">
        <div tw="grid grid-cols-3 gap-2 mb-6">
            <div>
              <div tw="text-zinc-400 text-xs text-center">Time left</div>
              <div tw="text-gray-400 text-sm text-center font-semibold">{leftTime}</div>
            </div>
            <NftCoin label={'Ticket price'} value={getRafflePrice(Number(raffle.ticketPrice))}></NftCoin>
            <NftCoin label={'Total price'} value={getRafflePrice(Number(raffle.totalPrice))}></NftCoin>
        </div>
        <div>
          <Progress label={'Remaining tickets'} value={Number(raffle.soldTickets)} total={Number(raffle.totalTickets)}></Progress>
        </div>
      </div>
    </div>
  );
};
export default NftCard;

export const NftCoin = (props: {label: string, value: number})=>{
  return(
    <div>
      <div tw="text-zinc-400 text-xs text-center">{props.label}</div>
      <div tw="flex items-center justify-center">
        <img alt="metamask" src={eth} tw="w-3 h-3 mr-1"/>
        <div tw="text-gray-400 text-sm text-center font-semibold">{props.value}</div>
      </div>
    </div>
  )
}

export const Progress = (props: {label: string, value: number, total:number})=>{
  return(
    <div>
      <div tw="flex justify-between mb-1">
        <div tw="text-zinc-400 text-xs font-medium">{props.label}</div>
        <div tw="text-gray-400 text-xs font-medium">{props.value}/{props.total}</div>
      </div>
      <ProgressBar completed={props.value} maxCompleted={props.total} isLabelVisible={false} height="4px"/>
    </div>
  )
}
