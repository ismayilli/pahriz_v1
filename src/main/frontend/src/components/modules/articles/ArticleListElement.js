const ArticleListElement = (props) => {
    const article_image = {
        backgroundImage: `url(${props.article.image})`
    }
    return (
        <div className="articles-list-element">
            <div className="articles-list-element__image" style={article_image}></div>
            <h1>{props.article.title}</h1>
        </div>
    )
}

export default ArticleListElement