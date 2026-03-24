import AboutHero from "@/components/Pages/About/AboutHero";
import Certificates from "@/components/Pages/About/Certificates";
import InventionsSection from "@/components/Pages/About/InventionsSections";
import Mission from "@/components/Pages/About/Mision";
import Vision from "@/components/Pages/About/Vision";
import WhoWeAre from "@/components/Pages/About/WhoWeAre";

export default function AboutPage() {
  return (
    <div>
<AboutHero/>
<Vision/>
{/* <WhoWeAre/> */}
<InventionsSection/>


<WhoWeAre/>
<Mission/>
<Certificates/>
     
    </div>
  )
}