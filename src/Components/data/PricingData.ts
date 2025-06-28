import { PricingPlan } from '../types/Pricing';

const pricingData: PricingPlan[] = [
 {
  title: "Intro",
  description: "The Intro plan offers essential features, allowing you to upload HD videos with ease while catering to basic business requirements.",
  price: "Free"
},
{
  title: "Base",
  description: "The Base plan is designed for small teams, providing robust tools to support your growing business needs.",
  price: "$49"
},
{
  title: "Pro",
  description: "The Pro plan enables advanced capabilities, including unlimited HD video uploads and comprehensive features tailored to meet the demands of professional users.",
  price: "$123",
  badge: "Save $40",
  button: "Try 1 month"
},
{
  title: "Enterprise",
  description: "The Enterprise plan delivers a complete suite of solutions designed for large-scale operations and customized business requirements.",
  price: "Custom"
}
];

export default pricingData;