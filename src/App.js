import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Button1 from './components/Button1/Button1';
import Button2 from './components/Button2/Button2';
import Button2Icon from './components/Button2Icon/Button2Icon';
import FeedbackCard from './components/FeedbackCard/FeedbackCard';
import FlashMessageError from './components/FlashMessageError/FlashMessageError';
import FlashMessageSuccess from './components/FlashMessageSuccess/FlashMessageSuccess';
import Arrow from './components/Arrow/Arrow';

function App() {
  return (
    <div className="App">
      <Arrow/>
      <FlashMessageSuccess/>
      <FlashMessageError/>
      <FeedbackCard/>
      <Header/>
      <Footer/>
      <Button1/>
      <Button2/>
      <Button2Icon/>
    </div>
  );
}

export default App;
