import ContentLoader from 'react-content-loader';

function CollectionLoading() {
  return (
    <ContentLoader
      width={1900}
      height={350}
      viewBox="0 0 1900 350"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede">
      <rect x={386 * 0} y="0" rx="0" ry="0" width="356" height="350" />
      <rect x={386 * 1} y="0" rx="0" ry="0" width="356" height="350" />
      <rect x={386 * 2} y="0" rx="0" ry="0" width="356" height="350" />
      <rect x={386 * 3} y="0" rx="0" ry="0" width="356" height="350" />
      <rect x={386 * 4} y="0" rx="0" ry="0" width="356" height="350" />
    </ContentLoader>
  );
}

export default CollectionLoading;
