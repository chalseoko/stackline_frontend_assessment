import Tags  from './tag';

function Summary(props: any) {
  return (
    <div>
      <div className="title-text">
        <p>{props.item.title}</p>
        <p>{props.item.subtitle}</p>
      </div>
      <img src={props.item.image} className="product-image" alt="Magic Bullet Blender/Mixer" />
      <div className="product-tags">
        <Tags text={props.item.tags}/>
      </div>
    </div>
  )
}

export default Summary;
