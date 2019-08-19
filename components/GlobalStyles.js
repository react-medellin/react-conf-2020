import Colors from '../components/Colors';
import Typography from '../components/Typography';

function GlobalStyles() {
  return (
    <style jsx global>{`
      body {
        background-color: ${Colors.indigo100};
        font-family: Roboto, -apple-system, BlinkMacSystemFont, Helvetica, Arial,
          sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        height: 100%;
      }
      h1,
      p {
        margin: 0;
      }
      body,
      html,
      #__next {
        height: 100%;
      }
    `}</style>
  );
}

export default GlobalStyles;
