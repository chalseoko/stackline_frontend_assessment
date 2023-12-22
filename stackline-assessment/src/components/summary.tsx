import thumbnail from './../images/thumbnail.png';

export function Summary() {
  return (
    <div>
      <div className="title-text">
        <h1>Title</h1>
        <p>Subtitle text that is about a sentence long.</p>
      </div>
      <img src={thumbnail} className="product-image" alt="" />
      <div className="product-tags">
        Tag buttons here
      </div>
    </div>
  )
}
