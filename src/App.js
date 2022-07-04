import React from "react";
import "karrotframe/lib/index.css";
import { Navigator, Screen } from "karrotframe";

const App = () => {
  return (
    <Navigator>
      <Screen path="/" component={Home} />
      <Screen path="/detail" component={Detail} />
    </Navigator>
  );
};

const Home = () => {
  return <div>캐롯프레임 연습해보자</div>;
};

const Detail = () => {
  return <div>Detail Component</div>;
};

export default App;
