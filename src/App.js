import logo from './logo.svg';
import './App.css';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';
import { Projects } from './Projects';
import { SummaryBox, MainChart } from './SummaryBox';
import { BoxMain } from './BoxMain';
import Card from '@mui/material/Card';

function App() {
  return (
    <div className="App">
  
  <h1>Dashboard</h1>
<SummaryBox/> 
<MainChart/>
<Mass/>





    </div>
  );
}

function Mass(){
  return(
    <div className='opp'>
      <div className='my'>
        <Projects/> 
<BoxMain/>
</div>
<div className='ta'>
  <Right/>
  <Left/>
</div>
    </div>
  )
}

function Right(){
  return(
   
        <Card className='ta-1' >
           
          <div className='earning'>Illustrations</div>
         
      
          <div className='tata'>
          <img src='https://static.vecteezy.com/system/resources/previews/000/964/177/non_2x/laptop-tablet-and-phone-set-with-blank-screens-vector.jpg'/>
          <div className='text2'>
          Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
   </div> 
   <div className='text2'><a>Browse Illustrations on unDraw →</a></div>
   </div>
   </Card >
    
  )
}
function Left(){
  return(

      <Card className='ta-2'>
             <div>
          <div className='earning'>Development Approach</div>
          <div className='point'></div>
        </div>
        <div className='big'>
        <div className='text'>B Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
</div>
<div className='text1'>
Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</div>
</div> 
</Card >
  )
}








export default App;
