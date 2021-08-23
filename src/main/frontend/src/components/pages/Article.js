import React from 'react'
import { articles } from '../exampleData'
import ArticleContent from '../modules/articles/ArticleContent'
import NotFound from '../pages/NotFound'

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articleContent: {default: 'default'},
            articleExists: true,
            articeId: this.props.match.params.id
        }
    }
    componentDidMount() {
        const articleContent = this.fetchArticle(this.state.articeId);
        if(articleContent == null) {
            this.setState({articleExists: false})
            this.props.history.push('/404')
        }
        else this.setState({articleContent})
    }
    async fetchArticle() {
        let url = "http://localhost:8080/api/article/"+this.state.articeId;
        let response = await fetch(url);
        let data = await response.json();

        this.setState(() => ({
            articleContent: data
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

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article