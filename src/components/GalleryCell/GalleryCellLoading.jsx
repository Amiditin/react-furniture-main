import ContentLoader from 'react-content-loader';

function GalleryCellLoading() {
  return (
    <ContentLoader
      width={1900}
      height={1300}
      viewBox="0 0 1900 1300"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede">
      <rect x={650 * 0} y={450 * 0} rx="0" ry="0" width="600" height="400" />
      <rect x={650 * 1} y={450 * 0} rx="0" ry="0" width="600" height="400" />
      <rect x={650 * 2} y={450 * 0} rx="0" ry="0" width="600" height="400" />
      <rect x={650 * 0} y={450 * 1} rx="0" ry="0" width="600" height="400" />
      <rect x={650 * 1} y={450 * 1} rx="0" ry="0" width="600" height="400" />
      <rect x={650 * 2} y={450 * 1} rx="0" ry="0" width="600" height="400" />
      <rect x={650 * 0} y={450 * 2} rx="0" ry="0" width="600" height="400" />
      <rect x={650 * 1} y={450 * 2} rx="0" ry="0" width="600" height="400" />
      <rect x={650 * 2} y={450 * 2} rx="0" ry="0" width="600" height="400" />
    </ContentLoader>
  );
}

export default GalleryCellLoading;
