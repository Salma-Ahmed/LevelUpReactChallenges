import React from "react";
import ReactDOM from "react-dom";
// import Notifications from "./Ch-1";
// import DogCart from "./Ch-2";
import Counter from "./Ch-3";
// import Tabs from "./Ch-4";
// import Clock from "./Ch-5/Clock";
// import Todos from "./Ch-6";
// import UncontrolledForm from "./Forms";
// import ControlledForm from "./Forms";
// import Modal, { ModalParent } from "./Ch-7";

import "./styles.css";
// import "./form.css";

const App = () => (
  <>
    {/* <ModalParent /> */}
    {/* <ControlledForm /> */}
    {/* <UncontrolledForm /> */}
    {/* <Todos
      myToDoList={[
        { text: "Have breakfast", complete: false },
        { text: "Go to work", complete: false },
        { text: "Have lunch", complete: false }
      ]}
    /> */}
    {/* <Clock />
    <Tabs titles={["Home", "About", "Gallery"]} activeIndex={0} />*/}
    <Counter min={3} max={10} intialCount={10} />
    {/*<DogCart title="dog" description="cute dog" />
    <Notifications count={9} />
    <Notifications count={12} />
    <Notifications count={0} />*/}
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
