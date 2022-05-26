import { render, screen } from "@testing-library/react";
import MyLineChart from "./MyLineChart";

describe("MyLineChart", () => {
    it("should render empty chart", () => {
        render(<MyLineChart width={400} height={500} data={[]} />);
        const pv_legend = screen.getByText("pv");
        const uv_legend = screen.getByText("uv");
        expect(pv_legend).toBeInTheDocument();
        expect(uv_legend).toBeInTheDocument();
    });
});
