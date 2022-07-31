interface BoxProps {
  widthPx?: number;
  widthPercentage?: number;
  heightPx?: number;
  heightPercentage?: number;
  showPreloader?: boolean;
  padding?: string;
  children?: JSX.Element | JSX.Element[] | string | number | null;
}

export { BoxProps };
