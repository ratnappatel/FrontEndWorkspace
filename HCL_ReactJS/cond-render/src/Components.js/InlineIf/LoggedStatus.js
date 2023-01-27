import LoggedInUser from "./LoggedInUser";
import LoggedOutUser from "./LoggedOutUser";
export default function LoggedStatus(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <LoggedInUser />;
    }
  return <LoggedOutUser />;
  }
  