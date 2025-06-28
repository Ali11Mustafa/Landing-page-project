"use client";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { donutChartData, donutChartColors } from "../../../data/companyData";

const DonutChart = () => {
  const total = donutChartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="p-[20px] h-[500px] bg-[#1E1E1E] rounded-lg flex flex-col justify-between min-w-[400px] w-full max-w-[500px] relative">
      <h2 className="text-xl mb-1 text-white">Primary Text</h2>
      <p className="text-2xl font-bold text-white/70">5.987,34</p>
      <p className="text-xs mb-4 text-gray-400">Secondary text</p>
      <div className="w-full h-[1px] bg-[#4f4f4f] mb-[30px]" />
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={donutChartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
              label={({ value }) => {
                const percent = ((value / total) * 100).toFixed(1);
                return `${percent}%`;
              }}
              labelLine={false}
            >
              {donutChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={donutChartColors[index % donutChartColors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#1e1e1e", color: "#fff", borderColor: "#333" }}
              itemStyle={{ color: "#fff" }}
              labelStyle={{ color: "#fff" }}
            />
            <Legend verticalAlign="bottom" align="left" iconType="circle" wrapperStyle={{ color: "#fff" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-lg">
       
      </div>
    </div>
  );
};

export default DonutChart;
