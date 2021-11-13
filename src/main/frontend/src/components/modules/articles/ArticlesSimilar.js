import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ArticlesSimilar = (props) => {
    const [articles, setArticles] = useState([]);

    useEffect(()=> {
        fetchSimilarArticles();
    },[props.categoryId, props.articleId]);

    const fetchSimilarArticles = async () => {
        let url = "http://localhost:8080/api/articles";
        let response = await fetch(url);
        let data = await response.json();

        const similarArticles = data.filter((article)=> {
            const categoryMatch = (article.category.id == props.categoryId ? true : false);
            const notSame = (article.id == props.articleId ? false : true);
            return categoryMatch && notSame;
        })

        setArticles(similarArticles);
    }

    return (
        <div className="similar-articles">
            <h2 className="similar-articles__title">Oxşar məqalələr</h2>
            {articles.map((article)=> {
                const article_image = {
                    backgroundImage: `url(${article.image})`
                }
                return (
                    <div key={article.id} className="similar-articles__element">
                        <Link to={`${article.id}`}>
                            <div className="similar-articles__element__image" style={article_image}></div>
                            <h4 className="similar-articles__element__title">{article.title}</h4>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ArticlesSimilar;