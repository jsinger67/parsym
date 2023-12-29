import "@testing-library/jest-dom";

export default function setupTests() {
  const { getComputedStyle } = window;
  window.getComputedStyle = (elt) => getComputedStyle(elt);

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value:
      // jest.fn().mockImplementation((query) => {
      (query: any) => {
        return {
          matches: false,
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        };
      },
    //),
  });

  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  window.ResizeObserver = ResizeObserver;
}
