import { Tabs } from './tabs';

describe('Tabs', () => {
  it('should create an instance', () => {
    expect(new Tabs(1,"Home",1,null,null,true)).toBeTruthy();
  });
});
