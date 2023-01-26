export function openPaymentWindow1() {
    const paymentUrl = "https://pay.nmkr.io/?p=35c364e083c848a5852fcdb9902f4e70&c=1";

    // Specify the popup width and height
    const popupWidth = 500;
    const popupHeight = 700;

    // Calculate the center of the screen
    // console.log("dddd", window.top.outerWidth ,window.top.screenX);
    const left = '100px';//window.top.outerWidth / 2 + window.top.screenX - ( popupWidth / 2 )
    const top = '100px';//window.top.outerHeight / 2 + window.top.screenY - ( popupHeight / 2 );

    const popup =  window.open(paymentUrl, "NFT-MAKER PRO Payment Gateway",  `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`);
   
}

export function openPaymentWindow3() {
    const paymentUrl = "https://pay.nmkr.io/?p=35c364e083c848a5852fcdb9902f4e70&c=3";

    // Specify the popup width and height
    const popupWidth = 500;
    const popupHeight = 700;

    // Calculate the center of the screen
    const left = '100px';//window.top.outerWidth / 2 + window.top.screenX - ( popupWidth / 2);
    const top = '100px';//window.top.outerHeight / 2 + window.top.screenY - ( popupHeight / 2);

    const popup =  window.open(paymentUrl, "NFT-MAKER PRO Payment Gateway",  `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`);

    // Show dim background
    // document.body.style = "background: rgba(0, 0, 0, 0.5)";

    // Continuously check whether the popup has been closed
    // const backgroundCheck = setInterval(function () {
    //     if(popup.closed) {
    //         clearInterval(backgroundCheck);

    //         console.log("Popup closed");

    //         // Remove dim background
    //         document.body.style = "";
    //     }
    // }, 1000);
}
export function openPaymentWindow10() {
    const paymentUrl = "https://pay.nmkr.io/?p=35c364e083c848a5852fcdb9902f4e70&c=10";

    // Specify the popup width and height
    const popupWidth = 500;
    const popupHeight = 700;

    // Calculate the center of the screen
    const left = '100px';//window.top.outerWidth / 2 + window.top.screenX - ( popupWidth / 2);
    const top = '100px';//window.top.outerHeight / 2 + window.top.screenY - ( popupHeight / 2);

    const popup =  window.open(paymentUrl, "NFT-MAKER PRO Payment Gateway",  `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`);

    // Show dim background
    // document.body.style = "background: rgba(0, 0, 0, 0.5)";

    // Continuously check whether the popup has been closed
    // const backgroundCheck = setInterval(function () {
    //     if(popup.closed) {
    //         clearInterval(backgroundCheck);

    //         console.log("Popup closed");

    //         // Remove dim background
    //         document.body.style = "";
    //     }
    // }, 1000);
}
export function openPaymentWindow20() {
    const paymentUrl = "https://pay.nmkr.io/?p=35c364e083c848a5852fcdb9902f4e70&c=20";

    // Specify the popup width and height
    const popupWidth = 500;
    const popupHeight = 700;

    // Calculate the center of the screen
    const left = '100px';//window.top.outerWidth / 2 + window.top.screenX - ( popupWidth / 2);
    const top = '100px';//window.top.outerHeight / 2 + window.top.screenY - ( popupHeight / 2);

    const popup =  window.open(paymentUrl, "NFT-MAKER PRO Payment Gateway",  `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`);

    // Show dim background
    // document.body.style = "background: rgba(0, 0, 0, 0.5)";

    // Continuously check whether the popup has been closed
    // const backgroundCheck = setInterval(function () {
    //     if(popup.closed) {
    //         clearInterval(backgroundCheck);

    //         console.log("Popup closed");

    //         // Remove dim background
    //         document.body.style = "";
    //     }
    // }, 1000);
}