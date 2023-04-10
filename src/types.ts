type CtaLinks = {
  text: string;
  link: string;
};

type TextboxTextColor = "black" | "grey" | "white";
type CompBackground = "light-grey" | "light-orange";
type TextboxBackground = "white" | "light-orange";

type CompColorProps = {
  bgColor: CompBackground;
};

type TextboxColorProps = {
  bgColor: TextboxBackground;
};

export interface Content {
  title: string;
  subTitle: string;
  description: string;
  ctaLinks: CtaLinks[];
  compBackground: CompColorProps;
  textboxBackground: TextboxColorProps;
  hideUnderline: boolean;
  textBoxTextColor: TextboxTextColor;
}
