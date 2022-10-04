import HeroSection from "../components/HeroSection.js";
import EmergencyCare from "../components/homePage/EmergencyCare.js";
import PetCareService from "../components/homePage/PetCareService.js";
import Swipers from "../components/homePage/Swipers.js";
import VideoPlay from "../components/homePage/VideoPlay.js";
import WeLooking from "../components/homePage/WeLooking";
import Layout from "../components/Layout.js";

export default function Home() {
  return (
    <div>
      <Layout>
        <HeroSection />
        <PetCareService />
        <VideoPlay />
        <EmergencyCare />
        <Swipers />
        <WeLooking />
      </Layout>
    </div>

  );
}

