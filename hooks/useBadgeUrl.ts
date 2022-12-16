import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { objectToQueryString } from 'utils/string';

function useBadgeUrl() {
  const { watch } = useFormContext();
  const [queryString, setQueryString] = useState('');

  useEffect(() => {
    const subscription = watch(({ text, speed }) =>
      setQueryString(
        objectToQueryString({ text, speed: 10 - parseInt(speed) }),
      ),
    );
    return () => subscription.unsubscribe();
  }, [watch, setQueryString]);

  return `https://9oormthon-badge.minung.dev/badge.svg${queryString}`;
}

export default useBadgeUrl;
