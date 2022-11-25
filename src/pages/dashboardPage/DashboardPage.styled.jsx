import styled from 'styled-components';
// import ellipseDesktopUp from '../../images/bg-desktop-login/ellipse-up-desktop.png';
import ellipseDown from '../../images/bg-tablet-login/ellipse-down.png';
import ellipseUp from '../../images/bg-tablet-login/ellipse-up.png';
import ellipseDownX from '../../images/bg-tablet-login/ellipse-down@2x.png';
import ellipseUpX from '../../images/bg-tablet-login/ellipse-up@2x.png';
import ellipseDownDesktop from '../../images/bg-desktop-login/ellipse.png';
import ellipseUpDesktop from '../../images/bg-desktop-login/ellipse-up-desktop.png';

export const Section = styled.section``;

export const ContainerDashboard = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: ;
  box-sizing: border-box;

  @media screen and (min-width: 320px) {
    width: 320px;
    padding: 0 20px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 15px;
    
`;

export const MainPage = styled.main`
background-color: var(--secondary-background-color);
  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;
    
    background-repeat: no-repeat;

    background-image: url(${ellipseDown}), url(${ellipseUp});

    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      .main {
        background-image: url(${ellipseDownX}), url(${ellipseUpX});
      }
      background-repeat: no-repeat;
      background-position: bottom 0 left 0, top 0 right 0, top 60px left 114px;
    }

    @media screen and (min-width: 1280px) {
      width: 1280px;
      height: 720px;
     
        url(${ellipseDownDesktop}),
        url(${ellipseUpDesktop});

      @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {
        .main {
          
            url(../../images/bg-desktop-login/ellipse@2x.png),
            url(../../images/bg-desktop-login/rectangle@2x.png);
        }
      }
      background-repeat: no-repeat;
      background-position: top 153px left 66px, bottom 0 left 0, top 0 right 0;
    }
  }
`;
