import { LayoutPropsType } from "@/definitions/types";
import Header from "./_components/main/header";

/**
 *
 * Website layout file
 */
function Layout({ children }: LayoutPropsType) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
