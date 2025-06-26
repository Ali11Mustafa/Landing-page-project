"use client";
import CountUp from "react-countup";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const CompanyPhilosophy = () => {
  const companyStats = [
    { id: 1, count: 1200, label: "Clients" },
    { id: 2, count: 20, label: "Branches" },
    { id: 3, count: 200, label: "Employees" },
    { id: 4, count: 315, label: "Sales Representatives" },
  ];

  const DonutChart = () => {
    const data = [
      { name: "Product A", value: 50 },
      { name: "Product B", value: 50 },
      { name: "Product C", value: 50 },
      { name: "Product D", value: 50 },
      { name: "Product E", value: 50 },
      { name: "Product F", value: 50 },
    ];

    const COLORS = ["#A259FF", "#F7931A"];

    return (
      <div className="py-5 rounded-xl md:w-[450px] h-[500px] bg-[#1e1e1e] flex flex-col justify-between relative">
        <h2 className="px-4 text-xl font-bold mb-1 text-white">Primary Text</h2>
        <p className="px-4 text-sm text-white/60">5.987,34</p>
        <p className="px-4 text-xs mb-4 text-gray-400">Secondary text</p>
        <div className="w-full h-[1px] bg-[#4f4f4f] mb-[30px]" />
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#1e1e1e", color: "#fff", borderColor: "#333" }}
              itemStyle={{ color: "#fff" }}
              labelStyle={{ color: "#fff" }}
            />
            <Legend
              verticalAlign="bottom"
              align="left"
              iconType="circle"
              wrapperStyle={{ color: "#fff" }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-lg">
          {data.reduce((sum, item) => sum + item.value, 0)}%
        </div>
      </div>
    );
  };

  const ProfitChart = () => {
    return (
      <div className="relative p-[20px] pr-10 mt-5 bg-[#1E1E1E] rounded-lg flex flex-col justify-center drop-shadow-[0_4px_4px_#0000001A] max-w-[800px] mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Net Profit</h2>
        <h3 className="text-gray-400 mb-6">2024</h3>
        <div className="flex justify-center">
          <BarChart
            width={700}
            height={350}
            data={[
              { name: "Product 1", profit: 200, fill: "#7D4283" },
              { name: "Product 2", profit: 90, fill: "#F3722C" },
              { name: "Product 3", profit: 150, fill: "#F8961E" },
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1e1e1e", color: "#fff", borderColor: "#333" }}
              itemStyle={{ color: "#fff" }}
              labelStyle={{ color: "#fff" }}
            />
            <Bar dataKey="profit" barSize={20}>
              {[
                "#7D4283",
                "#F3722C",
                "#F8961E",
              ].map((color, idx) => (
                <Cell key={idx} fill={color} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    );
  };

  const CompanyDataRepresentation = ({ count, label }) => (
    <div className="max-w-[141px] md:w-auto flex flex-col gap-2">
      <h3 className="text-5xl text-white font-semibold leading-[60px]">
        <CountUp end={count} duration={3} separator="" />+
      </h3>
      <p className="text-lg whitespace-nowrap text-[#646a69] font-medium">{label}</p>
    </div>
  );

  const Subheading = () => (
    <div className="w-full pb-4 flex items-center gap-2 border-b border-[#d9dedd]">
      <span className="w-2 h-2 bg-[#f2f2f2] rounded-full" />
      <p className="text-sm text-primary leading-5">The company&apos;s philosophy</p>
    </div>
  );

  const ContentBlock = () => (
    <div className="flex flex-col md:flex-row justify-between mt-14">
      <div className="md:w-[592px] flex flex-col gap-6">
        <h2 className="text-[32px] md:text-[62px] text-primary md:leading-[75px]">
          We bear the responsibility of developing the sector.
        </h2>
        <p className="text-md md:text-2xl text-[#646a69] md:leading-[36px]">
          Elevate your brand with our comprehensive marketing solutions,
          including Digital Marketing, Content Creation, and Social Media
          Strategy. Enhance visibility through expert SEO and PPC management,
        </p>
      </div>
      <div className="w-full md:w-[334px] flex flex-wrap md:flex-col gap-6 md:gap-[64px] mt-3 md:mt-0">
        {companyStats.map((item) => (
          <CompanyDataRepresentation key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </div>
  );

const ChartSection = () => (
  <div className="mt-[86px] flex flex-col gap-[25px]">
    <h3 className="text-2xl font-semibold text-white">Our charts</h3>
    <div className="flex flex-col xl:flex-row gap-[25px]">
      <div className="w-full xl:w-1/2">
        <ProfitChart />
      </div>
      <div className="w-full xl:w-1/2">
        <DonutChart />
      </div>
    </div>
  </div>
);


  return (
    <section className="px-6 md:px-[72px] flex flex-col">
      <Subheading />
      <ContentBlock />
      <ChartSection />
    </section>
  );
};

export default CompanyPhilosophy;
