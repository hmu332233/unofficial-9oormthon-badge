import useBadgeUrl from 'hooks/useBadgeUrl';
import CodeBox from './CodeBox';
import Space from './Space';

type Props = {};

function Example({}: Props) {
  const badgeUrl = useBadgeUrl();

  return (
    <Space>
      <h3 className="text-lg font-bold">SVG Url</h3>
      <CodeBox contents={badgeUrl} />
      <h4 className="text-lg font-bold">HTML Example</h4>
      <CodeBox
        contents={`<a href="https://9oormthon-badge.minung.dev"><img src="${badgeUrl}" alt="moon.svg"></a>`}
      />
      <h4 className="text-lg font-bold">Markdown Example</h4>
      <CodeBox
        contents={`[![9oormthon.badge](${badgeUrl})](https://9oormthon-badge.minung.dev)`}
      />
    </Space>
  );
}

export default Example;
