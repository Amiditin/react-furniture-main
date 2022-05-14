import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CollectionLoading from './CollectionLoading';

function Collection() {
  const { loading, posts } = useSelector((state) => state.posts);
  return (
    <div className="container-fluid">
      <div className="collection">
        {loading ? (
          <CollectionLoading />
        ) : (
          <>
            {posts.slice(0, 5).map((post) => (
              <Link className="collection__item" to={`/blog/${post.name}`} key={post.id}>
                <img className="collection__img" src={post.images[0]} alt="collection-img" />
                <div className="collection__info">
                  <h6 className="collection__info-title">{post.title}</h6>
                  <p className="collection__info-text">{post.style}</p>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Collection;
