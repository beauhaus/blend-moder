const Styles =
    `* {
        box-sizing: border-box;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, sans-serif;
        font-size: 18px;
        /* remove margin for gatsby wrapper-div */
        position: relative;
        > div {
            margin: 0;
        }
        h1,h2,h3,h4,h5,h6 {
            color: navy;
            margin: 0.2rem;
        }
        nav {
         
         white-space: nowrap;         
         padding: 2%;
         a:hover {
             color: whitesmoke;
         }
        }
        
    }
    `

export default Styles;