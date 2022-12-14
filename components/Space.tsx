import React from 'react';

import cn from 'classnames';

type Props = {
  children: React.ReactNode;
  gap?: number | string;
};

function Space({ children, gap = 4 }: Props) {
  return (
    <div className={cn('flex', 'flex-col', 'items-center', `gap-${gap}`)}>
      {children}
    </div>
  );
}

export default Space;
