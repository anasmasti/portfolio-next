const baseVantaOptions = {
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200,
  minWidth: 200,
  scale: 1,
  scaleMobile: 1,
  backgroundColor: 0x0,
};

export const globeVantaOptions = {
  ...baseVantaOptions,
  size: 1.4,
  color: 0x603cfd,
};

export const dotsVantaOptions = {
  ...baseVantaOptions,
  size: 3.4,
  spacing: 20,
  color: 0x603cfd,
  color2: 0x603cfd,
};
