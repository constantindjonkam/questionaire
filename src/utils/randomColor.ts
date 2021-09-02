export const randomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export const randomColors = (number: number) => {
  const colors = [];

  for (let int = 0; int < number; int++) {
    colors.push(randomColor());
  }

  return colors;
};
