import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import Footer from "./components/Footer/Footer";
import imgCooper from "./assets/cooper.jpg";
import imgBrand from "./assets/brand.jpg";
import author from "./assets/author.jpeg";
import imgProfessor from "./assets/professor.jpeg";
import Post from "./components/Post/Post";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header/>
      <About>EXPANDINDO OS LIMITES DA PRESENÇA HUMANA ALEM DAS ESTRELAS</About>
      <Post title="A Teoria da Relatividade Geral" author="Maria Ferreira da Silva" image={author} 
      article="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat pellentesque cursus. Suspendisse tincidunt erat ut metus interdum, in ultricies ante vehicula. Pellentesque vestibulum congue rhoncus. Nulla eget molestie justo. Phasellus vitae condimentum magna. Phasellus varius odio id urna commodo malesuada. Quisque porta nisi metus, et congue velit posuere eget. Pellentesque non consequat nunc, quis pellentesque lectus. Curabitur quis justo non odio congue volutpat sed quis risus. Duis ultrices mauris rutrum commodo vehicula. Phasellus fringilla lectus mauris, ut laoreet quam malesuada et. Vivamus est orci, lacinia at urna sit amet, vestibulum sollicitudin odio. Morbi leo lectus, euismod id nisl ut, mattis varius metus. Sed fringilla pretium elit in condimentum. Nam quis lectus ac nisl consectetur mattis nec ut erat. Nam scelerisque libero eros, nec sodales neque tempor tincidunt. Nullam ornare mollis volutpat. Suspendisse condimentum bibendum libero id bibendum. Donec in magna efficitur, faucibus arcu id, facilisis eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus feugiat, arcu sed placerat molestie, felis libero iaculis nulla, sit amet posuere dui ligula id odio. Nam quis nibh at urna varius ullamcorper. Sed dapibus auctor nisi vel rhoncus. Mauris vel lacinia est. Donec fermentum tellus ut tortor mollis tristique. Proin eu dictum ipsum, quis rhoncus quam. Maecenas finibus porta facilisis. Fusce at ullamcorper lectus, nec dignissim lorem. Nunc tincidunt vehicula justo consectetur rhoncus. Vivamus quis lacus feugiat risus tempus cursus id varius felis. Vivamus pretium arcu non molestie venenatis. Nam luctus arcu at metus aliquet convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris tristique a velit at dignissim. Cras ac laoreet ante. Mauris ut libero mattis, suscipit lectus ac, ullamcorper dui. Nullam vel magna eros. Vestibulum congue enim in pulvinar sollicitudin. Mauris sit amet arcu quis augue cursus pharetra. Quisque faucibus sed odio vel pretium. Maecenas vel lectus magna. Morbi faucibus tempor consequat. In hendrerit pretium auctor. Mauris congue in neque sit amet dignissim. Nam aliquet nisl a tellus rutrum, vitae lobortis dui auctor. Quisque id ligula eget tortor placerat tristique eget vel neque. Nam purus tellus, condimentum quis egestas vel, egestas ut urna. Morbi hendrerit enim vitae leo maximus egestas. Nulla scelerisque lectus eget augue auctor fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sit amet libero sit amet dui rutrum auctor sit amet ac odio."/>
      <UserCard avatar={imgCooper} name="Joseph Cooper" age="45 anos" occupation="Engenheiro" />
      <UserCard avatar={imgBrand} name="Amelia Brand" age="35 anos" occupation="Astronauta" />
      <UserCard avatar={imgProfessor} name="Brand" age="65 anos"/>
      <Footer/>
    </>
  );
}

export default App;
