import { useContext } from "react";
import { ThemeContext } from "../../contexts";
import { Button } from "../Button/Button";
import { boolean, select } from "@storybook/addon-knobs";
import {
  componentBackgroundColorOptions,
  textBoxBackgroundColorOptions,
  textboxColorOptions,
} from "./knobs";
import { Content } from "../../types";
import "./QuoteBlock.scss";

interface QuoteBlockProps {
  brand: string;
  data: Content;
}

export const QuoteBlock = (props: QuoteBlockProps) => {
  const titleUnderlined = boolean(
    "Title Underline",
    !props.data.hideUnderline,
    "Underline"
  );
  const compBackground = select(
    "Component background Color",
    componentBackgroundColorOptions,
    props.data.compBackground.bgColor,
    "Component background Color"
  );
  const textBoxBackgroundColor = select(
    "Textbox background color",
    textBoxBackgroundColorOptions,
    props.data.textboxBackground.bgColor,
    "Textbox Background Config"
  );
  const textboxColor = select(
    "Textbox text color",
    textboxColorOptions,
    props.data.textBoxTextColor,
    "Textbox Background Config"
  );

  const theme = props.brand ? props.brand : useContext(ThemeContext);
  const brandMode =
    theme === "A"
      ? "storybook-quoteblock--brandA"
      : "storybook-quoteblock--brandB";
  return (
    <div
      className={[
        "storybook-quoteblock",
        brandMode,
        `background-${compBackground}`,
      ].join(" ")}
    >
      <div className={["storybook-quoteblock__header", brandMode].join(" ")}>
        <h1 className="storybook-quoteblock__header--title">
          {props.data.title.toUpperCase()}
        </h1>
        <h5 className="storybook-quoteblock__header--subtitle">
          {props.data.subTitle}
        </h5>
        <div
          className={[
            "storybook-quoteblock__header--underline",
            titleUnderlined ? "visible" : "",
          ].join(" ")}
        >
          <hr />
        </div>
      </div>
      <div className="storybook-quoteblock__content">
        <span
          className={[
            "storybook-quoteblock__content",
            "content",
            `color-${textboxColor}`,
            `background-${textBoxBackgroundColor}`,
            brandMode,
          ].join(" ")}
        >
          {props.data.description}
        </span>
        <div className="buttons">
          <Button
            primary
            label={props.data.ctaLinks[0].text.toUpperCase()}
            size="large"
            onClick={() => window.open(props.data.ctaLinks[0].link)}
          />
          <Button
            label={props.data.ctaLinks[1].text.toUpperCase()}
            size="large"
            onClick={() => window.open(props.data.ctaLinks[1].link)}
          />
        </div>
      </div>
    </div>
  );
};
