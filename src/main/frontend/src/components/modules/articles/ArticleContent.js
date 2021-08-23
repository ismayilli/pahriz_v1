import { Link } from 'react-router-dom';

const ArticleContent = (props) => {
    const {articleContent} = props;
    return (
        <div className="article-content">
            <img className="article-content__image" src={articleContent.image} />
            <h1 className="article-content__title">{articleContent.title}</h1>
            <h2>{articleContent.id}</h2>
        </div>
    )
}

export default ArticleContent