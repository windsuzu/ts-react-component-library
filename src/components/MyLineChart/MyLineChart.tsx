import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import "./MyLineChart.scss";

interface MyLineChartData {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}

type Props = {
    width: number;
    height: number;
    data: MyLineChartData[];
};

const MyLineChart = ({ width, height, data }: Props) => {
    return (
        <div className="border-2 rounded-3xl chart">
            <LineChart
                width={width}
                height={height}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default MyLineChart;
