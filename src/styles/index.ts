import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`
  .first {
    background-color: red;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background-color: #f5f1ea;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        background-color: #7dbb91;
        width: 50%;
        height: 100%;
      }

      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          background-color: #7dbb91;
          width: 100%;
          height: 100%;
        }
      }
    }
    .b {
      background-color: #582534;
      width: 100%;
      height: 100%;
    }
    .c {
      background-color: #0a7397;
      width: 100%;
      height: 100%;
    }
  }

  .second {
    background-color: green;
  }

  .third {
    background-color: yellow;
  }

  .fourth {
    background-color: blue;
  }
`;

export const Section = styled.div`
  position: relative;

`;

export const Sticky = styled(motion.div)`
  position: sticky;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
`;
