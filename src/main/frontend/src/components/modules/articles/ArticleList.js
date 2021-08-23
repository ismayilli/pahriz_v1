import ArticleListElement from '../articles/ArticleListElement'
import { Link } from 'react-router-dom'

const ArticleList = (props) => {
    return (
        <div className="articles-page-list">
            <div className="row">
                {props.articles.map((article) => {
                    return (
                        <div className="col-md-4">
                            <Link to={`/article/${article.id}`}><ArticleListElement key={article.id} article={article} /></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ArticleList