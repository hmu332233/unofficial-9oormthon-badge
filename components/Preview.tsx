import useBadgeUrl from 'hooks/useBadgeUrl';
import React from 'react';

// import { createSvg } from 'utils/svg';

type Props = {};

function Preview({}: Props) {
  // TODO: 아래 기반으로 변경 필요
  // const svg = createSvg();
  // return <div dangerouslySetInnerHTML={{ __html: svg }} />;

  const badgeUrl = useBadgeUrl();

  return (
    <a>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={badgeUrl} alt="9oormthon.badge" />
    </a>
  );
}

export default Preview;
