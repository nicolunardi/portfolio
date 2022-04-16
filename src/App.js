import AboutContainer from "./components/About/AboutContainer";
import ContactContainer from "./components/Contact/ContactContainer";
import HomeContainer from "./components/Home/HomeContainer";
import Header from "./components/NavBar/NavBar";
import SkillsContainer from "./components/Skills/SkillsContainer";
import Socials from "./components/Socials/Socials";
import WorksContainer from "./components/Works/WorksContainer";

function App() {
  return (
    <div className="w-10/12 m-auto">
      <Header></Header>
      <HomeContainer></HomeContainer>
      <AboutContainer></AboutContainer>
      <SkillsContainer></SkillsContainer>
      <WorksContainer></WorksContainer>
      <ContactContainer></ContactContainer>
      <Socials></Socials>
    </div>
  );
}

export default App;
