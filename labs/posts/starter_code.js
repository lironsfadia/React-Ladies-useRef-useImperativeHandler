const PostList = () => {
  return (
    <div className="list-group">
      <button type="button" className="list-group-item list-group-item-action">A second item</button>
      <button type="button" className="list-group-item list-group-item-action">A third button item</button>
      <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
      <button type="button" className="list-group-item list-group-item-action" disabled>A disabled button item</button>
    </div>
  );
};

const Card = () => {
  return (
    <div className="card" style="width: 18rem;">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">bulk of the card's content.</p>
        </div>
    </div>
  );
};
