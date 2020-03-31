import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  bodyRef = React.createRef();

  render() {
    console.log(this.bodyRef)  
    //const icon = document.querySelector('#__next-prerender-indicator')
    //console.log(icon)
    return (
      <Html>
        <Head />
        <body style={{'margin':'0px'}}>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          * {
            -webkit-box-sizing: border-box;
               -moz-box-sizing: border-box;
                    box-sizing: border-box;
          }
          ul{
            list-style-type: none;
            margin-block-start: 0em;
            margin-block-end: 0em;
            padding-inline-start: 0px;
          }
          #__next-prerender-indicator{
            //번개표시 숨기기
            //display:none; 
            opacity:0.1;
          }
          #__next-build-watcher{ 
            //삼각형 표시 숨기기
            //display:none; 
            opacity:0.1;
          }
        `}</style>
      </Html>
    )
  }
}

export default MyDocument