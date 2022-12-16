import Header from 'components/Header';
import Footer from 'components/Footer';
import Seo from 'components/Seo';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo />
      <Header />
      <main className="grow flex flex-col items-center gap-y-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
