import 'twin.macro';

interface DetailStatusMODEL {
  views: number,
  likes: number,
}

const DetailImage = (props:{status: DetailStatusMODEL, image: string | undefined} ) => {
  const status: DetailStatusMODEL = props.status;

  return (
    <div>
      {props?.image?
      (<img alt="metamask" src={props?.image} tw="w-full rounded-2xl h-auto shadow-xl"/>)
      :(<div tw="w-full rounded-2xl h-[432px] bg-zinc-300 animate-pulse"></div>)
      }
      {/* <div tw="pt-4">
        <div tw="flex justify-between">
          <div tw="flex">
            <div tw="flex items-center">
              <img alt="metamask" src={showEye} tw="w-6 h-6 mr-1"/>
              <div tw="text-gray-800 text-base text-center">{status.views.toLocaleString()}</div>
              <img alt="metamask" src={heart} tw="w-3 h-3 ml-5 mr-1"/>
              <div tw="text-gray-800 text-base text-center">{status.likes.toLocaleString()}</div>
            </div>
          </div>
          <div tw="flex">
            <img alt="metamask" src={group} tw="w-4 h-4 mr-3.5"/>
            <img alt="metamask" src={goBack} tw="w-4 h-4"/>
          </div>  
        </div>
      </div>             */}
    </div>
  );
};
export default DetailImage;
