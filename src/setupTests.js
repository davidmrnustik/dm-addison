import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const mockXHR = {
  open: jest.fn(),
  send: jest.fn(),
};
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock

window.XMLHttpRequest = jest.fn(() => mockXHR);
window.XDomainRequest = jest.fn(() => mockXHR);