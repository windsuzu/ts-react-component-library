import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./MyLineChart.stories";
import MyLineChart from "./MyLineChart";

const { Small } = composeStories(stories);

describe("Testing with react-testing-library", () => {
    it("should render empty chart", () => {
        render(<MyLineChart width={400} height={500} data={[]} />);
        const pv_legend = screen.getByText("pv");
        const uv_legend = screen.getByText("uv");
        expect(pv_legend).toBeInTheDocument();
        expect(uv_legend).toBeInTheDocument();
    });
});

describe("Testing with Storybook", () => {
    it("should render empty chart", () => {
        render(<Small />);
        const pv_legend = screen.getByText("pv");
        const uv_legend = screen.getByText("uv");
        expect(pv_legend).toBeInTheDocument();
        expect(uv_legend).toBeInTheDocument();
    });
});
