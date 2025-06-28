// types/about.ts

export interface AboutParagraphPart {
  text?: string;           // normal text part (optional)
  highlight?: string;      // highlighted text part (optional)
}

export interface AboutParagraph {
  id: number;
  parts: AboutParagraphPart[];
}

export interface AboutButton {
  id: number;
  label: string;
  link?: string;
}

export interface AboutUsData {
  heading: string;
  paragraphs: AboutParagraph[];
  buttons: AboutButton[];
}
