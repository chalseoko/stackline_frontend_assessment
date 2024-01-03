function Tags(props: any) {
  return (
    <>
      <hr />
      <div className="tag-items">
        {props.text.map((item: string, index: number) => (
          <span key={index} className="tag">
            {item}
          </span>
        ))}
      </div>
      <hr />
    </>
  );
}

export default Tags;
