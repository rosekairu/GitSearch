import { Repo } from './repo';

describe('Repo', () => {
  it('should create an instance', () => {
    expect(new Repo('', '', '', 0, 0, 0, new Date())).toBeTruthy();
  });
});
