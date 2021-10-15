import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
       --background: #23212C;
       --font-color: #FFFFFF;
       --input-background: #373645;
       --input-color: #9693A6;
       --button1: linear-gradient(90deg, #EC008C 0%, #FC6767 100%);
       --button2: linear-gradient(90deg, #6909B4 0%, #7E23C6 50.52%, #B45EF7 100%);
       --details: #EC008C;
       --boxes: #C4C4C4;
    }

    body{
        background: var(--background);
        color: var(--font-color);
    }

    input, button{
       
    }

    h1,h2,h3,h4,h5,h6{
        
    }

    p{
       
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }


`;
