export const mergeClasses = (
  classes: string[] | string,
  classs: { [key: string]: boolean } = {}
): string => {
  const res = Object.keys(classs).reduce(
    (res: string[], key: string): string[] => {
      classs[key] && res.push(key);
      return res;
    },
    Array.isArray(classes) ? classes : [classes]
  );
  return res.join(" ");
};
