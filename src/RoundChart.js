import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Direct ', 'Social ', 'Referral'],
  datasets: [
    {
      
      data: [55,30, 15],
      backgroundColor: [
        'rgb(78 115 223)',
       

        'rgb(28 200 138)',
       
        'rgb(54 185 204)',
        

      ],
      borderColor: [
        'rgb(78 115 223)',
       
        'rgb(28 200 138)',
       
        'rgb(54 185 204)',
       
      ],
      
    },
  ],
};

export function RoundChart() {
  return <Doughnut data={data} />;
}