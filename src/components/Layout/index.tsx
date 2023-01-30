import { ReactNode } from "react"
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
	children: ReactNode;
	noFooter?: boolean;
};

const Layout = ({ children, noFooter }: LayoutProps) => {
	return (
		<>
			<Header />
				{children}
			{noFooter ? null : <Footer />}
		</>
	);
};

export default Layout;