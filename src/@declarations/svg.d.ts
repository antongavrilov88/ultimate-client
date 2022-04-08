declare module '*.svg' {
  type SVGProps = React.HTMLAttributes<SVGElement>;

  const url: string;
  const ReactComponent: React.FC<SVGProps>;
  export default url;
  export { ReactComponent };
}
