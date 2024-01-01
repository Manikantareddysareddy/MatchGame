import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem, onMatchedImg} = props
  const {imageUrl, thumbnailUrl} = thumbnailItem

  const onMatchImage = () => {
    onMatchedImg(imageUrl)
  }
  return (
    <li className="img-list-container">
      <button type="button" className="imageBtn" onClick={onMatchImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}
export default ThumbnailItem
