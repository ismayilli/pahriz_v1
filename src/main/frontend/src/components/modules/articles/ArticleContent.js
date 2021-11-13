import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const ArticleContent = (props) => {
    const {articleContent} = props;
    const text = parse(''+articleContent.content+'');
    return (
        <div className="article-content">
            <div className="article-content__header">
                <span className="article-content__header__category">{articleContent.category ? articleContent.category.name : ''}</span>
            </div>
            <h1 className="article-content__title">{articleContent.title}</h1>
            <div className="article-content__image">
                <img className="article-content__image__itself" src={articleContent.image} />
            </div>
            <div className="article-content__text">
                {text}
            </div>
        </div>
    )
}

export default ArticleContent