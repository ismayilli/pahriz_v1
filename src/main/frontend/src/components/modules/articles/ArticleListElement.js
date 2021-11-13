const ArticleListElement = (props) => {
    const article_image = {
        backgroundImage: `url(${props.article.image})`
    }
    return (
        <div className="articles-list-element">
            <div className="articles-list-element__image" style={article_image}></div>
            <h4 className="articles-list-element__title">{props.article.title}</h4>
        </div>
    )
}

export default ArticleListElement