export interface SpinnerWheelItem {
  id: string | number;
  label: string;
  color?: string;
  textColor?: string;
}

export interface SpinnerWheelProps {
  items: SpinnerWheelItem[];
  onSpinComplete?: (item: SpinnerWheelItem) => void;
  onButtonClick?: () => void | Promise<void>;
  spinning?: boolean;
  duration?: number;
  size?: number;
  fontSize?: number;
  borderWidth?: number;
  borderColor?: string;
  buttonText?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonIcon?: React.ReactNode;
  buttonSize?: number; // Custom button radius (overrides default 0.25 * radius)
  buttonFontSize?: number; // Custom button font size (if not provided, calculated based on button size)
  buttonBorderColor?: string;
  buttonBorderWidth?: number;
  disabled?: boolean;
  winningIndex?: number;
  autoSpinTrigger?: string | number | boolean | null;
  textLayout?: "radial" | "horizontal"; // "radial" = rotating text, "horizontal" = horizontal text from edge to center (default)
}
