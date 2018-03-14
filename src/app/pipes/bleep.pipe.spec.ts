import { BleepPipe } from './bleep.pipe';

describe('BleepPipe', () => {
  it('create an instance', () => {
    const pipe = new BleepPipe();
    expect(pipe).toBeTruthy();
  });
});
