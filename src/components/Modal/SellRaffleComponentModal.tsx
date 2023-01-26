import 'twin.macro';
import { parseEther } from 'ethers/lib/utils';
import { useState, useEffect } from 'react';
import { Modal, Divider } from 'antd';
import { GTicket } from '../../types';
import { getDurationDate } from '../../utils/helpers';
import checkMarkBlue from '../../assets/images/icon/check-mark-blue.svg';
import eth from '../../assets/images/icon/eth-icon.svg';
import arrowDown from '../../assets/images/icon/arrow-down.png';
import arrowUp from '../../assets/images/icon/arrow-up.png';

const SellRaffleComponentModal = (props: {isModalVisible: boolean, ticket: GTicket, handleOk: ()=>void, handleCancel: ()=>void }) =>{

  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isDetail, setDetail] = useState(false);
  const [modalFlag, setModalFlag] = useState(true);

  const handleConfirmOk = () => {
    setIsConfirmModalVisible(false);
  };

  const handleConfirmCancel = () => {
    setIsConfirmModalVisible(false);
  };

  const onDetail = () => {
    setDetail(!isDetail);
  }

  return(
    <>
      <Modal maskClosable={false} visible={props.isModalVisible && modalFlag} onOk={props.handleOk} onCancel={props.handleCancel} footer={null} width={620}>
        <div tw="text-gray-300 text-2xl font-semibold text-center mb-6">
          Complete raffle lisiting
        </div>
        <div tw="flex justify-between items-center">
          <div tw="flex items-center mt-3 relative">
            {/* <img alt="metamask" src={imageConvert(asset.metadata?.image)} tw="w-[141px] h-[141px] rounded-[12px] shadow-xl"/>  */}
            <div tw="mr-4 ml-5">
              <div tw="flex">
                <div tw="flex items-center">
                  <div tw="text-gray-50 text-sm font-normal">Collection:</div>
                  <img alt="metamask" src={checkMarkBlue} tw="w-3 h-3 mx-1.5"/>
                </div>  
              </div>
              {/* <div tw="text-[22px] font-semibold text-gray-300 mt-1">{asset.metadata?.name?asset.metadata?.name:asset.title}</div> */}
            </div>        
          </div>
          <div tw="flex items-center">
            <div tw="text-center">
              <div tw="text-sm text-gray-800">Price</div>
              <div tw="flex items-center justify-center my-1">
                <img alt="metamask" src={eth} tw="w-4 h-4 mr-1"/>
                <div tw="text-gray-300 text-center text-[22px] font-semibold">{(props.ticket?.totalPrice).toLocaleString()}</div>
              </div>
            </div>
            <img onClick={onDetail} alt="metamask" src={isDetail?arrowUp:arrowDown} tw="w-4 ml-3 cursor-pointer"/>
          </div>
        </div>
        {isDetail && 
          <>
            <Divider />
            <div tw="py-1 px-6">
              <div tw="flex justify-between mb-8">
                <div tw="text-gray-300 text-sm font-semibold">Ticket quantity</div>
                <div tw="text-gray-300 text-base font-semibold">x {(props.ticket?.quantity)}</div>
              </div>
              <div tw="flex justify-between mb-4">
                <div tw="text-gray-300 text-sm font-semibold">Price per ticket</div>
                <div>
                  <div tw="flex items-center justify-end">
                    <img alt="metamask" src={eth} tw="w-3 h-3 mr-1"/>
                    <div tw="text-gray-300 text-center text-base font-semibold">{(props.ticket?.perPrice)}</div>
                  </div>
                  <div tw="text-gray-800 text-right text-xs">aaaaaa</div>
                </div>
              </div>
              <div tw="flex justify-between">
                <div tw="text-gray-300 text-sm font-semibold">Scheduled for</div>
                <div>
                  <div tw="text-gray-300 text-base font-semibold text-right">{(props.ticket?.duration)} days</div>
                  <div tw="text-xs text-gray-800 text-right">{getDurationDate(props.ticket?.duration)}</div>
                </div>
              </div>
            </div>
          </>
        }
        <div tw="flex border-solid border px-7 rounded-t-lg h-28 mt-6">
          {/* <div tw="flex items-center">
            {isApproved?(
              <img alt="metamask" src={check} tw="w-[42px] h-[42px] mr-7"/>
            ):isApproving?(
              <SpinnerCircularFixed thickness={100} color="#9C40CF" tw="mr-7"/>
            ):(
              <img alt="metamask" src={error} tw="w-[50px] h-[50px] mr-7"/>
            )}
            <div>
              <div tw="text-2xl text-gray-300 font-semibold">Approve</div>
              <div tw="text-base text-gray-800">To create this raffle listing, you must approve this item for sale, which requires a one-time gas fee.</div>
            </div>
          </div> */}
        </div>
      </Modal>  
    </>
    
  )
}

export default SellRaffleComponentModal;
  