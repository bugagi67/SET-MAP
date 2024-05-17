import ErrorRepository from '../js/ErrorRepository';

test('test the Translate method by entering an existing error code', () => {
  const err = new ErrorRepository().translate(200);
  expect(err).toEqual('Ok');
});

test('test the Translate method by entering a non-existent error code', () => {
  const err = new ErrorRepository().translate(501);
  expect(err).toEqual('Unknown error');
});
