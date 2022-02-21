import React, { useCallback, useState } from 'react';
import AppContainer from 'components/AppContainer';
import BarChart from 'components/BarChart';
import LineChart from 'components/LineChart';
import { SalesDataInterface, SalesInterface } from 'interface/salesData';
import PieChart from 'components/PieChart';

type ChartType = 'LINE' | 'BAR' | 'PIE';

interface ChartsContainerInterface {
  chartData: SalesDataInterface, 
}

const ChartsContainer: React.FC<ChartsContainerInterface> = ({
  chartData,
}) => {
  const [firstYear, setFirstYear] = useState(1999);
  const [lastYear, setLastYear] = useState(2015);
  const [chartType, setChartType] = useState<ChartType>('BAR');

  const selectedType = useCallback(() => {
    switch (chartType) {
      case 'LINE':
        return <LineChart chartTitle={chartData.category} data={transformToChartData(chartData.sales)} />
      case 'BAR':
        return <BarChart chartTitle={chartData.category} data={transformToChartData(chartData.sales)} />
      case 'PIE':
        return (
          <>
            <p className='text-md text-center font-bold my-4'>Total</p>
            <PieChart data={transformToPIEChartData(chartData.sales).total} />
            <p className='text-md text-center font-bold my-4'>Ecommerce</p>
            <PieChart data={transformToPIEChartData(chartData.sales).ecommerce} />
          </>
        )
      default:
    }
  },[chartType, firstYear, lastYear]);

  const transformToChartData = useCallback((salesData: SalesInterface[]) => {
    const labels = salesData.map(saleData => saleData.year >= firstYear && saleData.year <= lastYear ? saleData.year.toString() : '').filter(year => year !== '');
    return {
      labels,
      datasets: [
        {
          label: 'E-Commerce',
          data: salesData.map(sale => sale.e_commerce),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Total',
          data: salesData.map(sale => sale.total),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ]
    }
  }, [firstYear, lastYear]);

  const transformToPIEChartData = useCallback((salesData: SalesInterface[]) => {
    const labels = salesData.map(saleData => saleData.year >= firstYear && saleData.year <= lastYear ? saleData.year.toString() : '').filter(year => year !== '');
    return {
      ecommerce: {
        labels,
        datasets: [
          {
            label: 'E-Commerce',
            data: salesData.map(sale => sale.e_commerce),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ]
      },
      total: {
        labels,
        datasets : [
          {
            label: 'Total',
            data: salesData.map(sale => sale.total),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        }
      ],
    }
    }
  }, [firstYear, lastYear]);

  return (
    <AppContainer key={chartData.category}>
      <div className="inline-flex gap-1 justify-between">
        <div className="flex mb-3 pt-0 gap-1">
          <input
            type="number"
            min={1999}
            max={2015}
            value={firstYear}
            placeholder="First Year"
            className="px-1 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-textColor rounded text-sm border-0 shadow outline-none focus:outline-none w-full"
            onChange={(event) => Number(event.target.value) < lastYear && Number(event.target.value) >= 1999 && Number(event.target.value) <= 2015 &&
              setFirstYear(Number(event.target.value))
            }
          />
          <input
            type="number"
            min={1999}
            max={2015}
            value={lastYear}
            placeholder="Last Year"
            className="px-1 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-textColor rounded text-sm border-0 shadow outline-none focus:outline-none w-full"
            onChange={(event) => Number(event.target.value) >= 1999 && Number(event.target.value) <= 2015 &&
              setLastYear(Number(event.target.value))
            }
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className={`bg-primaryColor text-textColor font-bold py-1 px-2 rounded hover:bg-secondaryColor ${chartType === 'PIE' && 'bg-secondaryColor'}`}
            onClick={() => setChartType('PIE')}
          >
              PIE
          </button>
          <button
            className={`bg-primaryColor text-textColor font-bold py-1 px-2 rounded hover:bg-secondaryColor ${chartType === 'BAR' && 'bg-secondaryColor'}`}
            onClick={() => setChartType('BAR')}
          >
              BAR
          </button>
          <button
            className={`bg-primaryColor text-textColor font-bold py-1 px-2 rounded hover:bg-secondaryColor ${chartType === 'LINE' && 'bg-secondaryColor'}`}
            onClick={() => setChartType('LINE')}
          >
            LINE
          </button>
        </div>
      </div>
      {selectedType()}
    </AppContainer>
  )
}

export default ChartsContainer;