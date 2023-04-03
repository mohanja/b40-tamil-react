import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
export function Projects() {
  const data = [{
    name: "Server Migration",
    present: "20%",
    pre: "20",
    color: "rgb(231 74 59)"
  },
  {
    name: "Sales Tracking",
    present: "40%",
    pre: "40",
    color: "rgb(246 194 62)"
  },
  {
    name: "Customer Database",
    present: "60%",
    pre: "60",
    color: "rgb(78 115 223)"
  },
  {
    name: "Payout Details",
    present: "80%",
    pre: "80",
    color: "rgb(54 185 204)"
  },
  {
    name: "Account Setup",
    present: "Complete!",
    pre: "100",
    color: "rgb(28 200 138)"
  }
  ];
  return (
   
    <Card  >

 <div className='win'>
          <div className='earning'>Projects</div>
          <div className='point'></div>
        </div>
        <div className='it-are'>
        <div className=' loss'>
      {data.map((data) => <Sacle data={data} />)}
      </div>
     </div>
     
    </Card>
    
  );
}
function Sacle({ data }) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 15,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "rgb(225,225,225)",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: data.color,
    },
  }));
  return (
    <div>
      <div className='are'>
        <div>{data.name}</div>
        <div>{data.present}</div>
      </div>
      <div className='pipe'>
        <BorderLinearProgress variant="determinate" value={data.pre} />
      </div>
</div>
  );
}
