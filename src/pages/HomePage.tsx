import tw, { styled } from "twin.macro";
import LandMint from "../components/LandMint";
import Collections from "../components/Collections";
import Collaborations from "../components/Collaborations";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Team from "../components/Team";
import SettingList from "../components/SettingList";
import Payment from "../components/Payment";
import MainPage from "./MainPage";

const StyledPage = styled.div`
  ${tw`w-full bg-[#DAE7EB]`}
  background-size: cover;
`;

const HomePage = () => {
  return (
    <StyledPage>
      <MainPage></MainPage>
      <About></About>
      <LandMint></LandMint>
      <Collections></Collections>
      <Collaborations></Collaborations>
      <Gallery></Gallery>
      <Team></Team>
      {/* <Payment></Payment> */}
      <SettingList></SettingList>
    </StyledPage>
  );
};

export default HomePage;
