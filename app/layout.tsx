import '../styles/globals.css';
import Layout from 'components/Layout';

type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  return <Layout>{children}</Layout>;
}

export default RootLayout;
