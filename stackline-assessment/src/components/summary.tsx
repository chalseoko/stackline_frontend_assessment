import { Fragment } from "react"
import Tags from "./tag"

function Summary(props: any) {
  return (
    <Fragment>
      <div className="product">
        <img
          src={props.item.img}
          className="product-image"
          alt="Magic Bullet Blender/Mixer"
        />
        <div className="title-text">
          <p>{props.item.title}</p>
          <p>{props.item.subtitle}</p>
        </div>
      </div>
      <div className="product-tags">
        <Tags text={props.item.tags} />
      </div>
    </Fragment>
  )
}

export default Summary
