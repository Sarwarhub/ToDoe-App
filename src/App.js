import Homepage from './Components/Homepage';
import Header from './Components/Header';
import Button from './Components/Button';
import './style.css'
const  App = () => {
  return (
  <div className='todo-container'>
    
    <Header title='ToDoi App' />
    <Homepage text='Eat' />
    <Homepage text='Code'/>
    <Homepage text='Sleep'/>
    <Homepage text='Repeat'/>
    <Homepage text='Play' />
    <Button/>
    
    </div>
  
    
  );
}

export default App;
