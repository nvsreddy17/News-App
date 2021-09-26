import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.getArticles();
    }

    /**
     * Get news articles from the API and process data
     */
    getArticles() {
        this.setState({ articles: [] });
        axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=f286287c617f41169b25a7beb60ff931`)
            .then((response) => {
                const data = response.data.articles;
                this.setState({ data: data });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const articleState = this.state.data;
        let views = <div>Loading...</div>
        if (articleState && articleState.length > 1) {
            views = Object.keys(articleState).map(article => <Article key={article} details={articleState[article]} />)
        }
        return (
            <div className="container">
                <div className="row">
                    <br />
                    <br />
                    {views}
                </div>
            </div>
        )
    }
}


export default Display;