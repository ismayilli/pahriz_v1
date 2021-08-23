import React from 'react'
import { articles, foodsCategories } from '../exampleData'
import ArticleList from '../modules/articles/ArticleList'
import ArticlesFilter from '../modules/articles/ArticlesFilter'

class Articles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articlesLoading: true,
            articles: [],
            search: "",
            category: 0
        }

        this.applySearch = this.applySearch.bind(this);
        this.applyCategory = this.applyCategory.bind(this);
        this.fetchArticles = this.fetchArticles.bind(this);
    }
    componentDidMount() {
        this.fetchArticles();
    }
    async fetchArticles() {
        let url = "http://localhost:8080/api/articles";
        let response = await fetch(url);
        let data = await response.json();

        const articles = data.filter((article)=> {
            const searchFilter = (this.state.search) ? (article.title.toLowerCase().indexOf(this.state.search) > -1) : true;
            console.log(searchFilter);
            return searchFilter;
        })

        this.setState(() => ({
            articles,
            articlesLoading: false
        }))
    }
    applySearch(search) {
        this.setState(()=>({
            search
        }))
    }
    applyCategory(category) {
        this.setState(()=>({
            category
        }))
    }
    render() {
        return (
            <div className="articles-page content-page">
                <div className="container">
                    <ArticlesFilter search={this.applySearch} category={this.applyCategory} fetch={this.fetchArticles}/>
                    <ArticleList articles={this.state.articles} articlesLoading={this.state.articlesLoading} />
                </div>
            </div>
        )
    }
}

export default Articles