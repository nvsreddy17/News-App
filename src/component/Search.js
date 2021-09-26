import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: this.props.default,
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    /**
     * Handle on change event and update search label
     */
    onChange(e) {
        if (e.target.value) {
            this.setState({ value: e.target.value });
        }
    }

    /**
     * Handle on click event and fetch news articles based on search label
     */
    onClick() {
        this.getArticles(`https://newsapi.org/v2/everything?q=${this.state.value}&apiKey=f286287c617f41169b25a7beb60ff931`);
    }

    getArticles(apiUrl) {
        this.setState({ data: [] });
        axios.get(apiUrl)
            .then((response) => {
                const data = response.data.articles;
                console.log(data);
                this.setState({ data: data });
            })
            .catch(error => {
                console.log(error);
            })
    }
    //Get News SOurces from the API
    componentDidMount() {
        this.getArticles(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=f286287c617f41169b25a7beb60ff931`);
    }

    // Render Method
    render() {
        const articleState = this.state.data;
        let views = <div>Loading...</div>
        if (articleState && articleState.length > 1) {
            views = Object.keys(articleState).map(article => <Article key={article} details={articleState[article]} />)
        }
        return (
            <div>
                <div className="row text-center">
                    <div className="col-lg-12">
                        <input
                            value={this.state.value}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Search news"
                            name="s"
                        />
                        <button type="submit" onClick={this.onClick}>Search</button>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="row">
                        <br />
                        <br />
                        {views}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
