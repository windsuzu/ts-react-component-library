import MyLineChart from "./MyLineChart";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "chart/MyLineChart",
    component: MyLineChart,
} as ComponentMeta<typeof MyLineChart>;

const Template: ComponentStory<typeof MyLineChart> = (args) => (
    <MyLineChart {...args} />
);

const data = [
    { name: "A", pv: 4000, uv: 2400, amt: 2400 },
    { name: "B", pv: 3000, uv: 1398, amt: 2210 },
    { name: "C", pv: 2000, uv: 9800, amt: 2290 },
    { name: "D", pv: 2780, uv: 3908, amt: 2000 },
];

export const Small = Template.bind({});
Small.args = {
    width: 300,
    height: 300,
    data,
};

export const Large = Template.bind({});
Large.args = {
    width: 600,
    height: 600,
    data,
};
