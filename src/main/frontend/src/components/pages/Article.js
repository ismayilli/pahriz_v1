import { tsMethodSignature } from '@babel/types'
import React from 'react'
import { articles } from '../exampleData'
import ArticleContent from '../modules/articles/ArticleContent'
import ArticlesSimilar from '../modules/articles/ArticlesSimilar'
import NotFound from '../pages/NotFound'
import setTitle from '../modules/_functions/setTitle'

class Article extends React.Component {
    constructor(props) {
        super(props)
        const essentials = {
            title: 'Pahriz.com'
        }

        this.state = {
            articleContent: {},
            articleExists: true,
            articleId: this.props.match.params.id,
            title: setTitle(essentials.title)
        }
    }
    componentDidMount() {
        const articleContent = this.fetchArticle(this.state.articleeId);
        if(articleContent == null) {
            this.setState({articleExists: false})
            this.props.history.push('/404')
        }
        else this.setState({articleContent})
    }
    componentDidUpdate() {
        if(this.state.articleId != this.props.match.params.id) {
            this.fetchArticle(this.props.match.params.id);
            this.setState(()=>({
                articleId: this.props.match.params.id
            }))
        }
    }
    async fetchArticle(articleId = this.state.articleId) {
        let url = "http://localhost:8080/api/article/"+articleId;
        let response = await fetch(url);
        let data = await response.json();

        this.setState(() => ({
            articleContent: data,
            title: setTitle(data.title)
        }))
    }
    render() {
        return (
            <div className="article-page content-page">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <ArticleContent articleContent={this.state.articleContent} />
                        </div>
                        <div className="col-md-3">
                            <ArticlesSimilar articleId={this.state.articleContent.id} categoryId={this.state.articleContent.id ? this.state.articleContent.category.id : 0} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article