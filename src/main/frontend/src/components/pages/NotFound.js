import setTitle from "../modules/_functions/setTitle"

const NotFound = () => {
    const essentials = {
        title: 'Not Found'
    }
    setTitle(essentials.title)
    return (
        <div className="not-found-page">
            404
        </div>
    )
}

export default NotFound