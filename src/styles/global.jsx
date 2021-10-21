import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style-type: none;
    }

    :root{
       --background: #23212C;
       --font-color: #FFFFFF;
       --font-transparent: #ffffffcc;
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

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    ::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #B45EF7;
  border: 0px none #ffffff;
  border-radius: 50px;
}


::-webkit-scrollbar-track {
  background: transparent;
  border: 0px none #ffffff;
  border-radius: 50px;
}


::-webkit-scrollbar-corner {
  background: transparent;
}


`;
