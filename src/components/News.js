import React from "react";
import axios from "axios";
import Header from "./Header.js"
import Newsinfo from "./Newsinfo.js"


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }
    componentDidMount() {
        axios
            .get('http://newsapi.org/v2/top-headlines?country=in&apiKey=dfe6535bd2374944ba0accca7eda9028'
            )
            .then(res => {
                const news = res.data.articles;
                this.setState({ news });
                console.log(news);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        let newsData = this.state.news.map((article, id) => (
            <Newsinfo
                key={id}
                title={article.title}
                description={article.description}

            />
        ));

        return (
            
            <div>
                <Header/>
                {newsData}
             </div>
        );
    }
}
export default App