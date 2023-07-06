/**
 * 卡片组件
 * @param param0
 * @returns
 */
const Card = ({
  header,
  footer,
  children,
  shadow = true,
  padding = true,
}: {
  shadow?: boolean;
  padding?: boolean;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}) => {
  const cardClass = "relative ring-1 ring-gray-900/5 w-full sm:rounded-lg ";
  return (
    <section
      className={
        cardClass +
        (shadow ? " shadow-xl" : "") +
        (padding ? " px-4 pt-10 pb-8" : "")
      }
    >
      {header ? <header>{header}</header> : null}
      <main className="divide-y divide-gray-300/50">{children}</main>
      {footer ? <footer>{footer}</footer> : null}
    </section>
  );
};

export default Card;
