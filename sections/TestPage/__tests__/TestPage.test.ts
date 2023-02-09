import React from 'react';

import { getName } from '../../../pages/testPage';



const mockData = {
  name: 'Frank',
}

describe('TestPage', () => {
  it('should get name', () => {
    const result = getName(mockData);
    expect(result).toBe('kitten');
  })
})