import Slider from './sections/Slider';
import WorksPath from './sections/WorksPath';
import BlogBox from './sections/BlogBox/BlogBox';
import Decor from './sections/Decor';
import NewCollection from './sections/NewCollection';
import Gallery from './sections/Gallery';

function Home() {
  return (
    <main className="main">
      <Slider />
      <NewCollection />
      <Decor />
      <Gallery />
      <WorksPath />
      <BlogBox />
    </main>
  );
}

export default Home;
