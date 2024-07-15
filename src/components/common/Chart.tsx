import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";

const divideCurrentMonth = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const now = new Date();
    const monthIndex = now.getMonth();
    const daysInMonth = new Date(now.getFullYear(), monthIndex + 1, 0).getDate();
    const segments = [];
    let day = 1;

    while (day <= daysInMonth) {
        const start = day;
        const end = Math.min(day + 6, daysInMonth);
        segments.push(`${months[monthIndex].slice(0, 3)} ${start}`);
        day = end + 1;
    }

    return segments;
}

const StatisticsChart: React.FC = () => {

    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartData = {
        labels: divideCurrentMonth(),
        datasets: [{
            data: [50, 100, 75], // Sample data
            borderColor: '#D9491B',
            backgroundColor: "red",
            fill: true
        }],
    };


    useEffect(() => {

        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                new Chart(ctx, {
                    type: 'line',
                    data: chartData
                });
            }
        }
    }, []);

    return (
        <canvas id="myChart" ref={chartRef}></canvas>
    );
};

export default StatisticsChart;
