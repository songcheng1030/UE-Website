import "twin.macro";
import { isVowel } from "../../utils/helpers";

interface ClickableTextProps {
  text: string;
  setIsShowNOPE: (value: boolean) => void
}

const ClickableText = (props: ClickableTextProps) => {
  const { text, setIsShowNOPE } = props;

  const onClickVowel = () => {
    setIsShowNOPE(true);
  };
  
  return (
    <>
      {text.split("").map((item, index) => {
        if (isVowel(item)) {
          return (
            <span key={index} onClick={onClickVowel} tw="cursor-pointer">
              {item}
            </span>
          );
        } else {
          return <span key={index}>{item}</span>;
        }
      })}   
    </>
  );
};
export default ClickableText;
