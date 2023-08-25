import "./App.css";
import ContentBai1 from "./Bai1/ContentBai1";
import FooterBai1 from "./Bai1/FooterBai1";
import HeaderBai1 from "./Bai1/HeaderBai1";
import NavBai1 from "./Bai1/NavBai1";
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
      {/* <RenderWithMap /> */}
      <NavBai1 />
      <HeaderBai1 />
      <ContentBai1 />
      <FooterBai1 />
    </div>
  );
}
export default App;
//home page : header ~ 50 dòng html
// list page : header ~ 50
// component ~ hàm ==> return về HTML
// tạo 1 component tên Header
// home page: header ~ 1 dòng tên component
