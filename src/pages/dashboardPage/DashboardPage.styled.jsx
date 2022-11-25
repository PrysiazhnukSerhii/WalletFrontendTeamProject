import styled from 'styled-components';
// import ellipseDesktopUp from '../../images/bg-desktop-login/ellipse-up-desktop.png';
import ellipseDown from '../../images/bg-tablet-login/ellipse-down.png';
import ellipseUp from '../../images/bg-tablet-login/ellipse-up.png';

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
  
    position: relative;
    background-color: var(--secondary-background-color);
    width: 100%;
    height: 568px;

    @media screen and (min-width: 768px) {
      width: 1280px;
      height: 720px;
      
      background-image: url(${ellipseDown}),
        url(${ellipseUp});
        

      @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {
        .main {
          background-image: url(../../images/bg-tablet-login/ellipse-down@2x.png),
            url(../../images/bg-tablet-login/ellipse-up@2x.png),
            url(../../images/frame-login/frame-tablet@2x.png);
        }
      }
      background-repeat: no-repeat;
      background-position: bottom 0 left 0, top 0 right 0, top 60px left 114px;
    }

    @media screen and (min-width: $DesktopWidth) {
      width: 1280px;
      height: 720px;
      background-image: url(../../images/frame-login/frame-desctop.png),
        url(../../images/bg-desktop-login/ellipse.png),
        url(../../images/bg-desktop-login/rectangle.png);

      @media screen and (min-device-pixel-ratio: 2),
        screen and (min-resolution: 192dpi),
        screen and (min-resolution: 2dppx) {
        .main {
          background-image: url(../../images/frame-login/frame-desctop@2x.png),
            url(../../images/bg-desktop-login/ellipse@2x.png),
            url(../../images/bg-desktop-login/rectangle@2x.png);
        }
      }
      background-repeat: no-repeat;
      background-position: top 153px left 66px, bottom 0 left 0, top 0 right 0;
    }
  }
`;
