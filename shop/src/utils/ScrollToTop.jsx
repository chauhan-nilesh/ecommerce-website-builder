import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({children}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [pathname]);

  return children;
};

export default ScrollToTop;