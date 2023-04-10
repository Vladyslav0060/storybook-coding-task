import "./button.scss";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  color?: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  color,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </button>
  );
};
