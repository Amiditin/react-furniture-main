import ContentLoader from 'react-content-loader';

function BlogBoxLoading() {
  return (
    <ContentLoader
      width={540}
      height={470}
      viewBox="0 0 540 470"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede">
      <rect x="0" y="0" rx="0" ry="0" width="540" height="360" />
      <rect x="0" y="397" rx="10" ry="10" width="400" height="18" />
      <rect x="0" y="438" rx="13" ry="13" width="540" height="22" />
    </ContentLoader>
  );
}

export default BlogBoxLoading;
