import { LayoutPropsType } from "@/definitions/types";
import Header from "./_components/main/header";
import Footer from "./_components/main/footer";

/**
 *
 * Website layout file
 */
function Layout({ children }: LayoutPropsType) {
  return (
    <div className="">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
