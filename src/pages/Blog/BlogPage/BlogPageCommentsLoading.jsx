import ContentLoader from 'react-content-loader';

function BlogPageCommentsLoading() {
  return (
    <ContentLoader
      speed={2}
      width={730}
      height={190}
      viewBox="0 0 730 190"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="32" cy="32" r="32" />
      <rect x="70" y="2" rx="10" ry="10" width="150" height="16" />
      <rect x="70" y="27" rx="10" ry="10" width="200" height="12" />

      <rect x="70" y="60" rx="10" ry="10" width="240" height="16" />
      <rect x="330" y="60" rx="10" ry="10" width="240" height="16" />
      <rect x="590" y="60" rx="10" ry="10" width="140" height="16" />

      <rect x="70" y="90" rx="10" ry="10" width="170" height="16" />
      <rect x="260" y="90" rx="10" ry="10" width="130" height="16" />
      <rect x="410" y="90" rx="10" ry="10" width="320" height="16" />

      <rect x="70" y="120" rx="10" ry="10" width="240" height="16" />
      <rect x="330" y="120" rx="10" ry="10" width="400" height="16" />
    </ContentLoader>
  );
}

export default BlogPageCommentsLoading;
