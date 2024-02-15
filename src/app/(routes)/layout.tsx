import { LayoutPropsType } from "@/definitions/types";
import Header from "./_components/main/header";
import Footer from "./_components/main/footer";

/**
 *
 * Website layout file
 */
function Layout({ children }: LayoutPropsType) {
  return (
    <div>
      <Header />
      {children}
      <Footer/>
    </div>
  );
}

export default Layout;
