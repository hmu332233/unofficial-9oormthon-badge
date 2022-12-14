import Layout from 'components/Layout';
import Drawer from 'components/Drawer';
import Preview from 'components/Preview';
import Space from 'components/Space';
import CodeBox from 'components/CodeBox';

function Index() {
  return (
    <Drawer>
      <Drawer.Content>
        <Layout>
          <Space>
            <p>
              구름톤 기간에만 열려있는 한정판 뱃지입니다!
              <br />
              사용할 곳의 도메인을 입력하고, 공유하기를 눌러주세요!
              <br />
            </p>
            <Preview />
            <Drawer.Button>공유하기</Drawer.Button>
          </Space>
        </Layout>
      </Drawer.Content>
      <Drawer.Side>
        <CodeBox contents="asdfasdfd" />
      </Drawer.Side>
    </Drawer>
  );
}

export default Index;
