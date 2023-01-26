import BigNumber from 'bignumber.js';
import { History } from 'history';
import { message, notification } from 'antd';
import { NotificationPlacement } from 'antd/lib/notification';
import moment from 'moment';

const DEFAULT_NUM_DECIMALS = 18;
const DEFAULT_DESIRED_DECIMALS = 2;
const ADDRESS_SHOW_AMOUNT = 5;

export function shortenAddress(address: string) {
  const length = address.length;
  return (
    address.substr(0, ADDRESS_SHOW_AMOUNT + 2) +
    '...' +
    address.substr(length - ADDRESS_SHOW_AMOUNT, length)
  );
}

export function getBasePathFromHistory(history: History) {
  const split = history.location.pathname.split('/');
  return '/' + split[1];
}

export function formatNumber(
  num: BigNumber,
  numDecimals = DEFAULT_DESIRED_DECIMALS
) {
  return num.toFormat(numDecimals);
}

export const formatStringNumber = (value: string | undefined) =>
  numberWithCommas(`${value}`);

function numberWithCommas(n: string) {
  var parts = n.toString().split('.');
  return (
    parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
    (parts[1] ? '.' + parts[1] : '')
  );
}

export function removeCommas(num: string): string {
  return num.replace(/,/g, '');
}

export function getStepFromDecimals(decimals: BigNumber): string {
  return new BigNumber(1).dividedBy(new BigNumber(10).pow(decimals)).toFixed();
}

export function formatBlockExplorerLink(
  chainId: number,
  to: string,
  isAddress = false
) {
  switch (chainId) {
    case 1:
      return `https://etherscan.io/${isAddress ? 'address' : 'tx'}/${to}`;
    case 42:
      return `https://kovan.etherscan.io/${isAddress ? 'address' : 'tx'}/${to}`;
    case 56:
      return `https://bscscan.com/${isAddress ? 'address' : 'tx'}/${to}`;
    case 137:
      return `https://polygonscan.com/${isAddress ? 'address' : 'tx'}/${to}`;
  }
}

export function copyToClipBoard(text: string) {
  navigator.clipboard.writeText(text);
  message.success({ content: 'copied to clipboard' });
}
export function showNotification(
  
  message: string,
  type: 'success' | 'error' | 'info' = 'success',
  placement: NotificationPlacement = 'bottomRight'
) {
  return notification[type]({
    message,
    placement,
  });
}

export function shiftedBigNumber(
  num: string | number,
  shiftAmount = DEFAULT_NUM_DECIMALS,
  shiftDirection = 'negative'
) {
  let number = new BigNumber(num);
  let shift = shiftDirection === 'negative' ? -1 * shiftAmount : shiftAmount;
  return number.shiftedBy(shift);
}

export function smallToBig(
  number: BigNumber,
  numDecimals = DEFAULT_NUM_DECIMALS
): string {
  return number.shiftedBy(numDecimals).toFixed();
}

export function bigToSmall(
  num: string | number,
  numDecimals = DEFAULT_NUM_DECIMALS,
  formatDecimals = DEFAULT_DESIRED_DECIMALS
): string {
  let number = new BigNumber(num);
  return number.shiftedBy(-1 * numDecimals).toFixed(formatDecimals, 1);
}

export function formatDate(date:string | Date){
  let parsed  = typeof date === 'string'?new Date(date):date;
  return `${parsed.getMonth()}-${parsed.getDate()}-${parsed.getFullYear()}`
}

export function waitFor(timeout: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), timeout);
  });
}

export function addressFormat(address: string){
  const word1 = address.slice(0, 4);
  const word2 = address.slice(address.length-4, address.length);
  return word1 + '...' + word2;
}   

export function addressLongFormat(address: string){
  const word1 = address.slice(0, 8);
  const word2 = address.slice(address.length-4, address.length);
  return word1 + '...' + word2;
}   

export function addressLongestFormat(address: string){
  const word1 = address.slice(0, 10);
  const word2 = address.slice(address.length-8, address.length);
  return word1 + '...' + word2;
}   


export function joinDateFormat(date: string | Date){
  return moment(date).format("DD MMM · YYYY")
}

export function leftDate(createdDate: number, duration: number){
  const endDate = createdDate + duration;
  const currentDate = Number(moment().format("X"));
  const diff = endDate - currentDate;

  let days = Math.floor(diff/3600/24);
  let hours = Math.floor((diff/3600) % 24);
  let minutes = Math.floor((diff % 3600)/60);

  if ( diff <= 0 ){ days = 0; hours = 0; minutes = 0; return `${days}h ${hours}d`;}
  if (days == 0) { return `${hours}h ${minutes}m`; }
    else { return `${days}d ${hours}h`; }  
}

export function leftDateDetail(createdDate: number, duration: number){
  const endDate = createdDate + duration;
  const currentDate = Number(moment().format("X"));
  const diff = endDate - currentDate;

  let days = Math.floor(diff/3600/24);
  let hours = Math.floor((diff/3600) % 24);
  let minutes = Math.floor((diff % 3600)/60);
  let seconde = (diff % 3600)%60;

  if ( diff < 0 ){ days = 0; hours = 0; minutes = 0; seconde = 0;}

  const leftTIme = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconde: seconde
  }
  return leftTIme
}

export function getRafflePrice(price: number){
  return new BigNumber(price).shiftedBy(-18).toNumber();
}

// export function getPrice(price: number, rate: number){
//   const eth = new BigNumber(price).shiftedBy(-18).toNumber();
//   return eth*rate
// }

export function getPrice(
  price: number,
  rate: number,
  numDecimals = DEFAULT_NUM_DECIMALS,
  formatDecimals = DEFAULT_DESIRED_DECIMALS
): any {
  let number = new BigNumber(price * rate).shiftedBy(-1 * numDecimals).toFixed(formatDecimals, 1);
  return Number(number).toLocaleString()
}

export function getEndDate(createdDate: number, duration: number){
  const endDate = createdDate + duration;
  const day = moment(endDate*1000).format("LLL z");
  return day;
}

export function getDateBySecond(seconde: number){
  const day = moment(seconde*1000).format("DD/MM/YYYY");
  return day;
}

export function getDurationDate(duration: number){
  const dateTo = moment().format('LLL');
  const dateFrom = moment().add(duration,'d').format('LLL');
  return dateTo + " - " + dateFrom;
}

export function historyDate(soldDate: number){
  const currentDate = Number(moment().format("X"));
  const diff = currentDate - soldDate;

  let days = Math.floor(diff/3600/24);
  if (days > 0) {
    return `${days} days ago`;
  } else {
    let hours = Math.floor((diff/3600) % 24);
    if (hours > 0) {
      return `${hours} hours ago`;
    } else {
      let minutes = Math.floor((diff % 3600)/60);
      if(minutes> 0){
        return `${minutes} minutes ago`;    
      }else{
        let second = (diff % 3600)%60;
        return `${second} seconds ago`;    
      }
    }
  } 
}

export function imageConvert(url: string | undefined){
  if (!url || !url.includes("ipfs://")) return url;
  return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
}

export function formattedNumberWithoutZeroDecimal(value: string) {
  let res = value;
  if (res.indexOf('.') > -1) {
    while (res[res.length - 1] === "0") {
      res = res.substring(0, res.length - 1);
    }
    if (res[res.length - 1] === ".") {
      res = res.substring(0, res.length - 1);
    }
  }
  return res;
}

export function isVowel(x:string) {

  let result = x === "A" || x === "a" || x === "E" || x === "e" || x === "I" || x === "i" || x === "O" || x === "o" || x === "U" || x === "u";
  return result;
}