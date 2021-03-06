import Chart from 'react-apexcharts'
import { useEffect } from 'react'
import { useAppSelector } from '../hooks'
import { ApexOptions, exec } from 'apexcharts'

const StatsCard = () => {
    const chart: { options: ApexOptions; series: any[] } = {
        options: {
            chart: {
                id: 'apexchart-example',
                type: 'line',
                animations: {
                    enabled: true,
                    easing: 'linear',
                    dynamicAnimation: {
                        speed: 1000,
                    },
                },
                toolbar: {
                    show: false,
                },
                zoom: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                type: 'datetime',
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
                y: {
                    formatter: undefined,
                    title: {
                        formatter: (seriesName: any) => seriesName,
                    },
                },
            },
            markers: {
                size: 0,
            },
        },
        series: [
            {
                name: 'Temperature :',
                data: [],
            },
        ],
    }
    const temperaturesHistory = useAppSelector(
        (state) => state.temperaturesHistory
    )
    useEffect(() => {
        let my_data: any = []
        temperaturesHistory.forEach((element: any) => {
            my_data.push([element.time, element.value])
        })
        exec('apexchart-example', 'updateSeries', [
            {
                data: my_data,
            },
        ])
    }, [temperaturesHistory])
    return (
        <section className="bg-gray-100 border-b py-8">
            <div className="container max-w-5xl mx-auto m-8">
                <h1 className="w-full my-2 text-3xl font-bold leading-tight text-center text-blueweather">
                    Statistiques temperature
                </h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="w-full mb-4 ">
                    <Chart
                        options={chart.options}
                        series={chart.series}
                        type="line"
                        height={350}
                    />
                </div>
            </div>
        </section>
    )
}

export default StatsCard
