const ScreenSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '767px',
  laptop: '800px',
  laptopL: '1440px',
  desktop: '2560px',
}

const query = {
  mobileS: `(min-width: ${ScreenSizes.mobileS})`,
  mobileM: `(min-width: ${ScreenSizes.mobileM})`,
  mobileL: `(min-width: ${ScreenSizes.mobileL})`,
  tablet: `(min-width: ${ScreenSizes.tablet})`,
  laptop: `(min-width: ${ScreenSizes.laptop})`,
  laptopL: `(min-width: ${ScreenSizes.laptopL})`,
  desktop: `(min-width: ${ScreenSizes.desktop})`,
  desktopL: `(min-width: ${ScreenSizes.desktop})`,
}
const breakpoint = (size) => (size ? query[size] : '')

export const breakPointInNumber = (size)  =>{
  const bPoint = ScreenSizes[size];
  const id = bPoint.indexOf('px');
  const breakPointNumber = bPoint.substring(0, id);
  return parseInt(breakPointNumber, 10);
}

export default breakpoint
