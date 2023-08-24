import "./App.css";
import DataBinding from "./DataBinding/DataBinding";
import ClassComponent from "./DemoComponent/ClassComponent/ClassComponent";
import FunctionComponent from "./DemoComponent/FunctionComponent/FunctionComponent";
import Ex_Layout from "./Ex_Layout/Ex_Layout";
import RenderWithMap from "./RenderWithMap/RenderWithMap";

function App() {
  return (
    <div className="App">
      {/* jsx:html+javascript */}
      {/* <h1 className="App-logo"> Hello react app</h1> */}
      {/* buổi 1 */}
      {/* <FunctionComponent /> */}
      {/* <FunctionComponent></FunctionComponent> */}
      {/* <ClassComponent /> */}
      {/* buổi 2 */}
      {/* <Ex_Layout /> */}
      {/* <DataBinding /> */}
      <RenderWithMap />
    </div>
  );
}
export default App;
//home page : header ~ 50 dòng html
// list page : header ~ 50
// component ~ hàm ==> return về HTML
// tạo 1 component tên Header
// home page: header ~ 1 dòng tên component
