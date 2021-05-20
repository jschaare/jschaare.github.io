import { useEffect} from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const { GA_ID } = process.env;

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(GA_ID);
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

export default GoogleAnalytics;