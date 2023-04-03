import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faDollarSign, faComments, faPercent, faList } from '@fortawesome/free-solid-svg-icons';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { Chart } from './Chart';
import { RoundChart } from './RoundChart';
import { Card } from '@mui/material';

export function MainChart() {
  return (
    <div className='charts'>
      <Card className='items' >
        
        <div>
          <div className='earning'>Earnings Overview</div>
          <div className='point'></div>
        </div>
       <div className='chart'>
        <Chart />
        </div>
      </Card>
      
      < Card className='items1' >
      <div >
          <div className='earning'>Revenue Sources</div>
          <div className='point'></div>
        </div>
        <div className='round'>
        <RoundChart />
        </div>
      </ Card >
    </div>
  );
}
export function SummaryBox() {
  const data = [{
    text: "EARNINGS (MONTHLY)",
    number: "42,000",
    icon: <FontAwesomeIcon icon={faDollarSign} className="icon-st" />,
    textcolor: "rgb(78 115 223)",

    type: 'money'
  }, {
    text: "EARNINGS (ANNUAL)",
    number: "215,000",
    icon: <FontAwesomeIcon icon={faCalendar} className="icon-st" />,
    textcolor: "green",

    type: 'money'
  }, {
    text: "PENDING REQUESTS",
    number: "18",
    icon: <FontAwesomeIcon icon={faComments} className="icon-st" />,
    textcolor: "#f6c23e",

    type: 'number'
  }];
  return (

    <div className='container'>
      {data.map((data) => <MonthlyProfits data={data} />)}
      <Task />
    </div>


  );

}
function MonthlyProfits({ data }) {
  return (
    
    <Card className='back-box' style={{ backgroundColor: data.textcolor }}>
      <div className='font-box'>

        <div className='double'>
          <div>
            <div className='or'  style={{ color: data.textcolor }}>{data.text}</div>

            <div className='currency'>{data.type === "money" ? <FontAwesomeIcon className='symbol' icon={faDollarSign} /> : null}{data.number}</div>
          </div>
          <div className='icon'>
            {data.icon}
          </div>
        </div>
      </div>
   
</Card>
  );
}
function Task() {
  const data = {
    text: "TASK",
    number: "50",
    icon: <FontAwesomeIcon icon={faList} className="icon-st" />,
    textcolor: "rgb(54 185 204)",
    bordercolor: "",
    type: 'number'
  };
  return (
    <Card className='back-box' style={{ backgroundColor: data.textcolor }}>
      <div className='font-box'>


        <div style={{ color: data.textcolor  ,fontSize:13,fontWeight:600}}>{data.text}</div>
        <div className='dod'>
          <div className='currency'>{data.number}<FontAwesomeIcon className='symbol'  icon={faPercent} style={{ color: "black", width: 12 ,fontSize:24}} /></div>
          <Box className="top" sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={data.number} />
          </Box>
          <div className='icon1'>{data.icon}</div>
        </div>


      </div>
    </Card>
  );
}
