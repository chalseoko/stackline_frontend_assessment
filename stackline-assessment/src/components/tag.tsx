import { Fragment } from "react";

export function Tags() {
    const tags: string[] = ["SampleTag", "AnotherTag", "TinyTag", "VerryyyyLongTag",]

    return (
        <Fragment>
            <hr />
            <div className="tag-items">
                {tags.map((tag, index) => {
                    return (
                        <div key={index}>
                            <p className="tag">{tag}</p>
                        </div>
                    );
                })}
            </div>
            <hr />
        </Fragment>
    )
}

