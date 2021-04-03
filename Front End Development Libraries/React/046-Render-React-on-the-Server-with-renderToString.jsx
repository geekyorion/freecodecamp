import { ReactDOMServer } from '../assets/react/react-dom.production.min/server';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>asdfasdf</div>
    }
};
  
// Change code below this line
ReactDOMServer.renderToString(<App />);

// This is useful in case of SEO when you want some markup once initial loading is done

// https://www.freecodecamp.org/learn/front-end-libraries/react/render-react-on-the-server-with-rendertostring 
