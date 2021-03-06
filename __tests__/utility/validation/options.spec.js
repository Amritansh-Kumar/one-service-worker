/*
 * Copyright 2020 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import { getCacheOptions } from '../../../src/utility/validation/options';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('getCacheOptions', () => {
  test('getCacheOptions returns undefined', () => {
    expect.assertions(1);

    expect(getCacheOptions()).toBe(undefined);
  });

  test('getCacheOptions returns only options that will be passed', () => {
    expect.assertions(2);

    const {
      ignoreSearch = false,
      ignoreMethod = false,
      ignoreVary = false,
      cacheName = 'my-cache',
      random = '',
    } = {};

    const options = {
      ignoreSearch,
      ignoreMethod,
      ignoreVary,
      cacheName,
      random,
    };

    expect(Object.keys(getCacheOptions(options))).toHaveLength(4);
    expect(getCacheOptions(options)).toMatchObject({
      ignoreSearch: false,
      ignoreMethod: false,
      ignoreVary: false,
      cacheName: 'my-cache',
    });
  });
});
