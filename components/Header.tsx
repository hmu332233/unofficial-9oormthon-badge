import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex justify-center py-4">
      <h1 className="text-4xl font-bold text-base-content mx-auto">
        Goormthon Badge
      </h1>
    </header>
  );
}

export default Header;
