import { Fragment } from "react";

function Tags(props: any) {

    return (
        <Fragment>
            <hr />
            <div className="tag-items">
                {props.text && props.text.map((item, index) => <span key={index} className="tag">{item}</span>)}
            </div>
            <hr />
        </Fragment>
    )
}

export default Tags;

