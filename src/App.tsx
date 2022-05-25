import { MyLineChart } from "./components";

function App() {
    const data = [
        {
            name: "Page A",
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: "Page B",
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: "Page C",
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
    ];
    return (
        <div className="flex justify-center items-center h-screen">
            <MyLineChart width={400} height={400} data={data} />
        </div>
    );
}

export default App;
