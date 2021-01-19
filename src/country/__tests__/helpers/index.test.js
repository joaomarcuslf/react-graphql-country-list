import { filterCountries, applyMutations } from '../../helpers';

test('filterCountries: should return the same array if no term given', () => {
  const countries = filterCountries([
    { name: 'Country 01', capital: 'Capital 01', flag: { svg: '' } },
    { name: 'Country 02', capital: 'Capital 02', flag: { svg: '' } },
  ]);

  expect(countries.length).toBe(2);
});

test('filterCountries: should return a filtered array if the term matches 01', () => {
  const countries = filterCountries([
    { name: 'Country 01', capital: 'Capital 01', flag: { svg: '' } },
    { name: 'Country 02', capital: 'Capital 02', flag: { svg: '' } },
  ], '01');

  expect(countries.length).toBe(1);
  expect(countries).toEqual([{ name: 'Country 01', capital: 'Capital 01', flag: { svg: '' } }]);
});

test('filterCountries: should return a filtered array if the term matches 02', () => {
  const countries = filterCountries([
    { name: 'Country 01', capital: 'Capital 01', flag: { svg: '' } },
    { name: 'Country 02', capital: 'Capital 02', flag: { svg: '' } },
  ], '02');

  expect(countries.length).toBe(1);
  expect(countries).toEqual([{ name: 'Country 02', capital: 'Capital 02', flag: { svg: '' } }]);
});

test('filterCountries: should return nothing if nothing matches', () => {
  const countries = filterCountries([
    { name: 'Country 01', capital: 'Capital 01', flag: { svg: '' } },
    { name: 'Country 02', capital: 'Capital 02', flag: { svg: '' } },
  ], '03');

  expect(countries.length).toBe(0);
  expect(countries).toEqual([]);
});

test('applyMutations: should return the exact same object if no mutation is given', () => {
  const countries = applyMutations([
    {
      name: 'Country 01', capital: 'Capital 01', flag: { svg: '' }, alpha2Code: '01',
    },
    {
      name: 'Country 02', capital: 'Capital 02', flag: { svg: '' }, alpha2Code: '02',
    },
  ], {});

  expect(countries.length).toBe(2);
  expect(countries).toEqual([
    {
      name: 'Country 01', capital: 'Capital 01', flag: { svg: '' }, alpha2Code: '01',
    },
    {
      name: 'Country 02', capital: 'Capital 02', flag: { svg: '' }, alpha2Code: '02',
    },
  ]);
});

test('applyMutations: should apply the mutations if it matches', () => {
  const countries = applyMutations([
    {
      name: 'Country 01', capital: 'Capital 01', flag: { svg: '' }, alpha2Code: '01',
    },
    {
      name: 'Country 02', capital: 'Capital 02', flag: { svg: '' }, alpha2Code: '02',
    },
  ], {
    '01': { name: 'Country 03' },
  });

  expect(countries.length).toBe(2);
  expect(countries).toEqual([
    {
      name: 'Country 03', capital: 'Capital 01', flag: { svg: '' }, alpha2Code: '01',
    },
    {
      name: 'Country 02', capital: 'Capital 02', flag: { svg: '' }, alpha2Code: '02',
    },
  ]);
});


test('applyMutations: should apply multiple mutations if it matches', () => {
  const countries = applyMutations([
    {
      name: 'Country 01', capital: 'Capital 01', flag: { svg: '' }, alpha2Code: '01',
    },
    {
      name: 'Country 02', capital: 'Capital 02', flag: { svg: '' }, alpha2Code: '02',
    },
  ], {
    '01': { name: 'Country 03' },
    '02': { capital: 'Capital 04' },
  });

  expect(countries.length).toBe(2);
  expect(countries).toEqual([
    {
      name: 'Country 03', capital: 'Capital 01', flag: { svg: '' }, alpha2Code: '01',
    },
    {
      name: 'Country 02', capital: 'Capital 04', flag: { svg: '' }, alpha2Code: '02',
    },
  ]);
});
