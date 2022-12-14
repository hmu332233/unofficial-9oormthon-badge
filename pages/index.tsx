import Layout from 'components/Layout';
import Drawer from 'components/Drawer';
import Preview from 'components/Preview';
import Example from 'components/Example';
import Form from 'components/Form';
import FormProvider from 'components/FormProvider';

function Index() {
  return (
    <FormProvider>
      <Drawer>
        <Drawer.Content>
          <Layout>
            <p className="text-center">
              4기 구름톤을 위한 <span className="font-bold">한정판 배지</span>
              입니다!
              <br />
              공유하기를 눌러주세요!
            </p>
            <Preview />
            <Form />
            <Drawer.Button>공유하기</Drawer.Button>
          </Layout>
        </Drawer.Content>
        <Drawer.Side>
          <Example />
        </Drawer.Side>
      </Drawer>
    </FormProvider>
  );
}

export default Index;
