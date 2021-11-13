import React from 'react'
import { articles, foodsCategories } from '../exampleData'
import ArticleList from '../modules/articles/ArticleList'
import ArticlesFilter from '../modules/articles/ArticlesFilter'
import setTitle from '../modules/_functions/setTitle'

class Articles extends React.Component {
    constructor(props) {
        super(props)
        const essentials = {
            title: 'Articles'
        }

        this.state = {
            articlesLoading: true,
            articles: [],
            search: "",
            category: 0,
            articleCategories: [],
            title: setTitle(essentials.title)
        }

        this.applySearch = this.applySearch.bind(this);
        this.applyCategory = this.applyCategory.bind(this);
        this.fetchArticles = this.fetchArticles.bind(this);
    }
    componentDidMount() {
        this.fetchArticles();
        this.fetchArticleCategories();
    }
    async fetchArticles() {
        let url = "http://localhost:8080/api/articles";
        let response = await fetch(url);
        let data = await response.json();

        const articles = data.filter((article)=> {
            const searchFilter = (this.state.search) ? (article.title.toLowerCase().indexOf(this.state.search) > -1) : true;
            const categoryFilter = (this.state.category != 0) ? (article.category.id == this.state.category) : true;
            console.log(searchFilter +" "+ categoryFilter);
            return searchFilter && categoryFilter;
        })

        this.setState(() => ({
            articles,
            articlesLoading: false
        }))
    }
    async fetchArticleCategories() {
        let url = "http://localhost:8080/api/getAllArticleCategories";
        let response = await fetch(url);
        let data = await response.json();

        this.setState(() => ({
            articleCategories: data,
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
                    <ArticlesFilter categories={this.state.articleCategories} search={this.applySearch} category={this.applyCategory} fetch={this.fetchArticles}/>
                    <ArticleList articles={this.state.articles} articlesLoading={this.state.articlesLoading} />
                </div>
            </div>
        )
    }
}

export default Articles