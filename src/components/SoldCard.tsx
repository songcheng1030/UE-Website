import 'twin.macro';
import { useState, useEffect } from 'react';
import { GRaffleSoldHistory, GRaffles } from '../types';
import { getRafflePrice, addressFormat, historyDate } from '../utils/helpers';
import showMark from '../assets/images/icon/check-mark-blue.svg';

const SoldCard = (props: {sold: GRaffleSoldHistory[] }) => {

  const sold: GRaffleSoldHistory[] = props.sold;

  return (
    <div tw="w-full">
      <div tw="border-b-[1px] mb-4">
        <div tw="grid grid-cols-7 gap-4 pb-4 pt-2 px-4">
          <div tw="col-start-1 col-span-2 text-gray-100 font-semibold text-base">Item</div>
          <div tw="col-start-3 col-span-1 text-gray-100 font-semibold text-base">Price</div>
          <div tw="col-start-4 col-span-1 text-gray-100 font-semibold text-base">Quantity</div>
          <div tw="col-start-5 col-span-1 text-gray-100 font-semibold text-base">From</div>
          <div tw="col-start-6 col-span-1 text-gray-100 font-semibold text-base">To</div>
          <div tw="col-start-7 col-span-1 text-gray-100 font-semibold text-base">Time</div>
        </div>
      </div>
      <div>
        {sold.length !== 0 ? sold.map((item, index)=>{
          return(
            <div key={index} tw="items-center grid grid-cols-7 gap-4 pb-4 pt-2 px-4">
              <div tw="flex items-center col-start-1 col-span-2 text-gray-100 text-sm">
                <img alt="metamask" src={item?.nft.metadata?.image} tw="w-[82px] rounded-lg h-auto shadow-xl"/>
                <div tw="ml-3">
                  <div tw="flex items-center">
                    <div tw="text-gray-700 text-sm">{item.nft?.title}</div>
                    <img alt="metamask" src={showMark} tw="w-3 h-3 ml-2"/>
                  </div>
                  <div tw="text-gray-300 text-sm font-semibold">{item.nft?.metadata?.name?item.nft?.metadata?.name:item.nft?.title}</div>
                </div>
              </div>
              <div tw="col-start-3 col-span-1 text-gray-100 text-sm">
                <Price raffleId={item?.history?.raffleId}></Price>
              </div>
              <div tw="col-start-4 col-span-1 text-gray-300 text-sm font-semibold">1</div>
              <div tw="col-start-5 col-span-1 text-blue-100 text-sm">You</div>
              {item?.history?.to && 
                <a tw="text-blue-100 pr-1.5 text-sm mx-1.5 cursor-pointer w-[77px]" className="text-overflow" target="_blank" href={`https://rinkeby.etherscan.io/address/${item?.history?.to}`}>{addressFormat(item?.history?.to)}</a>  
              }
              <div tw="col-start-7 col-span-1 text-blue-100 text-sm">{historyDate(item.history?.timestamp)}</div>
            </div>
          )
        }):(
          <div tw="flex justify-center mt-20 text-[#818181] text-4xl font-semibold">
            No items to display
          </div>
        )}
      </div>
    </div>
  );
};
export default SoldCard;

export const Price = (props: {raffleId: string})=>{

  const [raffle, setRaffle]  = useState<GRaffles>();

  return(
    <div tw="pr-10 w-[fit-content]">
      <div tw="text-gray-300 text-sm font-semibold text-right">{getRafflePrice(Number(raffle?.totalPrice))}</div>
      <div tw="text-[#797979] text-xs text-right">aaaaa</div>
    </div>
  )
}