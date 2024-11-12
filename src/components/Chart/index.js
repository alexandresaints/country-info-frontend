import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend)

export const Chart = ({ isLoading, country, name }) => {
    const chartData = {
        labels: [],
        datasets: [
            {
                label: `Population per period from ${name}`,
                data: [],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
                type: 'line',
            },
            {
                label: `Population count from ${name}`,
                data: [],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                type: 'bar',
            },
        ],
    }

    if (!isLoading && country?.populationInfo?.populationCounts) {
        country.populationInfo.populationCounts.forEach((item) => {
            chartData.labels.push(item.year)
            chartData.datasets[0].data.push(item.value)
            chartData.datasets[1].data.push(item.value)
        })
    }

    return (
        <div className="w-full lg:w-[70%] lg:h-[550px] flex justify-center items-center mx-auto">
            <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
    )
}
