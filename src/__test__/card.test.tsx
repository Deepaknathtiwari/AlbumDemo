/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';
import Card from '../component/Card';
const findByTestAttr = (component: any, attr: any) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
describe('Album Card Component', () => {
  const wrapperCardComponent = shallow(
    <Card
      rowData={{ item: {}, index: 0 }}
      handleNavigation={(item: any) => {}}
    />,
  );
  it('Album snapshot', () => {
    expect(wrapperCardComponent).toMatchSnapshot('GP Card snap');
  });
  it('Album card render', () => {
    const component = findByTestAttr(
      wrapperCardComponent,
      'Album-card-component',
    );
    expect(component.length).toBe(1);
  });
});
