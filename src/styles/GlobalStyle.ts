import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #200; /* Slightly brighter reddish/purplish background */
    display: block;
    width: 100%;
    text-align: center; /* Center content horizontally */
  }

  /* Banner style */
  .banner {
    width: 75%; /* 75% of the horizontal space */
    height: 100%; /* Cover 100% of the vertical space */
    background-color: rgba(255, 255, 255, 0.93); /* Increased opacity */
    margin: 0 auto; /* Center horizontally */
    z-index: 10; /* Ensure it's on top */
  }

  h1, h2 {
    color: #333;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyle;
