import Chart from 'react-apexcharts'
import { addTemperatureHistory } from '../slices/app'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../store'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../hooks'

const StatsCard = () => {
    const dispatch = useDispatch<AppDispatch>()

    const chart: { options: ApexCharts.ApexOptions; series: any[] } = {
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
                    enabled: false,
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
        ApexCharts.exec('apexchart-example', 'updateSeries', [
            {
                data: my_data,
            },
        ])
    }, [temperaturesHistory])
    return (
        <section className="bg-gray-100 border-b py-8">
            <div className="container max-w-5xl mx-auto m-8">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
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
