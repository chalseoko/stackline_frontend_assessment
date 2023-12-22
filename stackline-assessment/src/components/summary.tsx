import thumbnail from './../images/thumbnail.png';
import { Tags } from './tag';

export function Summary() {
  return (
    <div>
      <div className="title-text">
        <p>Product Name</p>
        <p>Subtitle text that is about a sentence long.</p>
      </div>
      <img src={thumbnail} className="product-image" alt="" />
      <div className="product-tags">
        <Tags/>
      </div>
    </div>
  )
}
