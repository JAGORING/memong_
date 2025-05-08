const breakpoints = {
  small: '@media (max-width: 767px)',
  medium: '@media (max-width: 1199px)',
  large: '@media (min-width: 1200px)',
};

const theme = {
  whiteColor: '#FFFFFF',
  blackColor: '#000000',
  StoryBoxBackgroudColor: '#F2F2F2',
  adBanner1Color: '#0F59F4',
  adBanner2Color: '#44B089',
  banner1BlueTextColor: '#B7E5FF',
  banner1YellowTextColor: '#FFE766',
  purpleBtnColor: '#532FD0',
  mainH1GrayColor: '#303535',
  mainH4GrayColor: '#717C8A',
  CarouselBackgroudColor: '#f6f6f6de',
  CarouselCardColor: '#303535',
  StoryGrayColor: '#C8D3E1',
  StoryGray2Color: '#B7C6D9',
  StoryGray3Color: '#9A9A9A',
  UserViewDarkGrayColor: '#373F49',
  UserViewPurpleColor: '#7B59E2',
  UserViewBackGrdgroudColor: 'linear-gradient(180deg, #72A2FF 0%, #7C66FB 100%)',
  ExperienceBlueColor: '#0587FE',
  ExperienceGrayColor: '#9EA8AA',
  UsePlanCardWhiteColor: '#FFFBF0',
  BannerGrayColor: '#80888A',
  grdText: `background: linear-gradient(to right, #72a4ff, #7d65fb);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;`,
  aboveMobile: `
    display: none;
    ${breakpoints.small} {
      display: block;
    }
  `,
  aboveDevice: `
    display: none;
    ${breakpoints.medium} {
      display: block;
    }
  `,
  onlyPC: `
  display: block;
  ${breakpoints.medium} {
    display: none;
  }
  ${breakpoints.small} {
    display: none;
  }
`,
};

export default theme;
export { breakpoints };
