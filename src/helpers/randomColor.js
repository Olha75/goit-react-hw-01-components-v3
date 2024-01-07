// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  const baseRed = 0xd0;
  const baseBlue = 0xd0;
  const randomGreen = Math.floor(Math.random() * 96) + 160;

  const hexColor = `#${baseRed.toString(16).padStart(2, '0')}${randomGreen
    .toString(16)
    .padStart(2, '0')}${baseBlue.toString(16).padStart(2, '0')}`;

  return hexColor;
}

export default getRandomHexColor;
