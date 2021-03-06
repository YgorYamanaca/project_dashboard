import ChartsContainer from 'components/ChartsContainer';
import { salesData } from 'data/salesData';
import React from 'react';

const DashBoardPage: React.FC = () => {

  return (
    <div id='dashboard-page-id' className='flex justify-start flex-col gap-3 w-full overflow-y-auto items-center my-6'>
      {
        salesData.map(saleData => (
          <ChartsContainer key={saleData.category} chartData={saleData} />
        ))
      }
    </div>
  )
}

export default DashBoardPage;