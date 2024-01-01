import { Fragment } from "react";

function Tags(props: any) {
  return (
    <Fragment>
      <hr />
      <div className="tag-items">
        {props.text.map((item: string, index: number) => (
          <span key={index} className="tag">
            {item}
          </span>
        ))}
      </div>
      <hr />
    </Fragment>
  );
}

export default Tags