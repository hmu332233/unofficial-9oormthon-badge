import useBadgeUrl from 'hooks/useBadgeUrl';
import CodeBox from './CodeBox';

type Props = {};

function Example({}: Props) {
  const badgeUrl = useBadgeUrl();

  return (
    <div>
      <p className="text-center">
        박스를 눌러 코드를 복사하고,
        <br />
        Github, Notion등 자유롭게 사용하세요!
      </p>
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
    </div>
  );
}

export default Example;
