
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextForm from './components/Textform';
import Header from './components/Header';
import './components/common.css';

function App() {
  return (
    <>
   
      <div className="box">
    <Header title="Textutils" />
   
  
  <TextForm  heading="Enter your Text Here"/>
  </div>
  </>
  );

}

export default App;
