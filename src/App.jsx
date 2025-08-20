import "./App.css";
import Header from "./pages/headerSection/headerSection";
import ProcessStep from "./assets/imgs/Image 8.png";
import PortfolioSection from "./pages/PortfolioSection/PortfolioSection";
import ImageGridSection from "./pages/ImageGridSection/ImageGridSection";
import ProjectHighlightSection from "./pages/ProjectHighlightSection/ProjectHighlightSection";
import TestimonialsSection from "./pages/TestimonialsSection/TestimonialsSection";
import AboutSection from "./pages/AboutSection/AboutSection";
import InteriorSolutions from "./pages/InteriorSolutions/InteriorSolutions";
import CabinetSection from "./pages/cabinetSection/cabinetSection";
import BeforeAfterSection from "./pages/BeforeAfterSection/BeforeAfterSection";
import PostsSlider from "./pages/postsSlider/postsSlider";
import ArchentWestGroup from "./pages/ARCHENTWESTGROUP/archentWestGroup";
function App() {
  return (
    <>
      <Header />
      <div className="h-[100px]"></div>
      <ArchentWestGroup />

      <div>
        <img src={ProcessStep} alt="img" />
      </div>
      <div className="h-[100px]"></div>
      <PortfolioSection />
      <div className="h-[100px]"></div>

      <PostsSlider />
      <InteriorSolutions />

      <CabinetSection />

      <AboutSection />
      <ProjectHighlightSection />

      <TestimonialsSection />

      <ImageGridSection />
      <div className="h-[100px]"></div>

      <BeforeAfterSection
        beforeImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UL6JUu3ltOO1rrYZCb8269Khxq9Xvb.png"
        beforeAlt="Before - Minimalist modern living space"
        afterImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UL6JUu3ltOO1rrYZCb8269Khxq9Xvb.png"
        afterAlt="After - Luxurious transformed living space"
        description="Witness the remarkable transformation from a sterile, minimalist space to a warm, luxurious living environment."
        beforeLabel="Before Renovation"
        afterLabel="After Renovation"
      />
    </>
  );
}

export default App;
