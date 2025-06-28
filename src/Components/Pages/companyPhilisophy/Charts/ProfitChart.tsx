"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { profitChartData, profitChartColors } from "../../../data/companyData";

const ProfitChart = () => {
  return (
    <div className="p-[20px] h-[500px] bg-[#1E1E1E] rounded-lg flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Net Profit</h2>
        <h3 className="text-gray-400 mb-4">2024</h3>
      </div>
      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={profitChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1e1e1e", color: "#fff", borderColor: "#333" }}
              itemStyle={{ color: "#fff" }}
              labelStyle={{ color: "#fff" }}
            />
            <Bar dataKey="profit" barSize={20}>
              {profitChartColors.map((color, idx) => (
                <Cell key={idx} fill={color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProfitChart;
