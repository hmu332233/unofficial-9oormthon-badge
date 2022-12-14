import React from 'react';

import { createSvg } from 'utils/svg';

type Props = {};

function Preview({}: Props) {
  const svg = createSvg();
  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default Preview;
