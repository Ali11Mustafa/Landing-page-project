// data/about.ts
import { AboutUsData } from "../types/about"

export const aboutUsData: AboutUsData = {
  heading: "About Us",
  paragraphs: [
    {
      id: 1,
      parts: [
        { text: "Welcome to " },
        { highlight: "Focus Marketing Solutions" },
        {
          text:
            "! We're a creative team dedicated to driving your business forward with innovative marketing strategies. From digital marketing to social media management, we're here to help you succeed. ",
        },
        { highlight: "Let's build something extraordinary together." },
      ],
    },
  ],
  buttons: [
    {
      id: 1,
      label: "Read more",
      link: "#",
    },
  ],
};
