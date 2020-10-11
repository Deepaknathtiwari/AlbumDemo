/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
//jest.mock('../srcapi/utils/images.tsx', () => jest.fn());
jest.mock('react-redux', () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: () => jest.fn(),
  connect: () => jest.fn(),
}));
jest.useFakeTimers();
