import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configure } from "enzyme";
import { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("button working properly", () => {
  const handleClick = jest.fn();
  const button = shallow(<button onClick={handleClick}>Spela</button>);
  button.simulate("click");
  expect(handleClick.mock.calls.length).toEqual(1);
  expect(handleClick.mock.calls.length).toEqual(1);
});

it("button working properly2", () => {
  const wrapper = mount(<App />);
  const button = wrapper.find("button");
  button.simulate("click");
  expect(button.prop("disabled")).toEqual(false);
});
