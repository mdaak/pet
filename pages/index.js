import HeroSection from "../components/HeroSection.js";
import EmergencyCare from "../components/homePage/EmergencyCare.js";
import PetCareService from "../components/homePage/PetCareService.js";
import Swipers from "../components/homePage/Swipers.js";
import VideoPlay from "../components/homePage/VideoPlay.js";
import WeLooking from "../components/homePage/WeLooking";
import Layout from "../components/Layout.js";

export default function Home() {
  const home_hero = {
    img:'https://preview.colorlib.com/theme/thepetcare/assets/img/hero/h1_hero1.png.webp',
    heading1:'Saving Animals',
    heading2:'Changing Live',
    contant1:'Far far away, behind the word mountains, far from the',
    contant2:'',
    cardImage:'https://preview.colorlib.com/theme/thepetcare/assets/img/gallery/xwoner-img.jpg.pagespeed.ic.1jiOSH1JZw.webp',
    cardText:'The Kind of Care Your'
}
  return (
    <div>
      <Layout>
        <HeroSection hero_material={home_hero} />
        <PetCareService />
        <VideoPlay />
        <EmergencyCare />
        <Swipers />
        <WeLooking />
      </Layout>
    </div>

  );
}

