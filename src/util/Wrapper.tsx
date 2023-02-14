import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "../app/store";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}
const store = setupStore();
const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <BrowserRouter>
      {" "}
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );
};

export default Wrapper;
