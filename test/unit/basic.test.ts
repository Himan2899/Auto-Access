import { describe, it, expect } from 'vitest';

describe('Basic Tests', () => {
  it('should pass basic math test', () => {
    expect(2 + 2).toBe(4);
  });

  it('should handle string operations', () => {
    const str = 'Hello, World!';
    expect(str.toLowerCase()).toBe('hello, world!');
  });

  it('should work with arrays', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.length).toBe(5);
    expect(arr.includes(3)).toBe(true);
  });
});
