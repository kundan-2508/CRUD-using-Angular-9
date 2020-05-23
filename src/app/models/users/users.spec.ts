import { Users } from './users';

describe('Users', () => {
  it('should create an instance', () => {
    expect(new Users(1,"Kundan","kun123658@gmail.com",9955074864)).toBeTruthy();
  });
});
