import { vi } from 'vitest';
import '@testing-library/jest-dom';

// Mock Chrome APIs
global.chrome = {
  runtime: {
    sendMessage: vi.fn(),
    onMessage: {
      addListener: vi.fn(),
      removeListener: vi.fn()
    },
    openOptionsPage: vi.fn()
  },
  storage: {
    sync: {
      get: vi.fn(),
      set: vi.fn(),
      clear: vi.fn()
    },
    local: {
      get: vi.fn(),
      set: vi.fn(),
      clear: vi.fn()
    },
    onChanged: {
      addListener: vi.fn(),
      removeListener: vi.fn()
    }
  },
  tabs: {
    query: vi.fn(),
    sendMessage: vi.fn()
  },
  scripting: {
    executeScript: vi.fn()
  },
  devtools: {
    panels: {
      create: vi.fn()
    }
  }
} as any;

// Mock Web APIs
global.speechSynthesis = {
  speak: vi.fn(),
  cancel: vi.fn(),
  pause: vi.fn(),
  resume: vi.fn(),
  getVoices: vi.fn(() => [])
} as any;

global.SpeechRecognition = vi.fn().mockImplementation(() => ({
  continuous: false,
  interimResults: false,
  lang: 'en-US',
  start: vi.fn(),
  stop: vi.fn(),
  onresult: null,
  onerror: null,
  onend: null
}));

global.webkitSpeechRecognition = global.SpeechRecognition;

// Mock fetch
global.fetch = vi.fn();

// Mock URL.createObjectURL and URL.revokeObjectURL
global.URL.createObjectURL = vi.fn(() => 'mock-url');
global.URL.revokeObjectURL = vi.fn();

// Mock Blob
global.Blob = vi.fn().mockImplementation((content, options) => ({
  content,
  options,
  size: content.length,
  type: options?.type || 'text/plain'
}));

// Mock document methods - use real DOM methods but with proper mocking
const originalCreateElement = document.createElement;
document.createElement = vi.fn((tagName) => {
  const element = originalCreateElement.call(document, tagName);
  // Add any additional mocking if needed
  return element;
});

// Mock window.getComputedStyle
global.getComputedStyle = vi.fn(() => {
  const mockStyle = {
    display: 'block',
    visibility: 'visible',
    opacity: '1',
    position: 'static',
    color: 'rgb(0, 0, 0)',
    backgroundColor: 'rgb(255, 255, 255)',
    fontSize: '16px',
    fontFamily: 'Arial',
    fontWeight: 'normal',
    lineHeight: 'normal',
    textAlign: 'left',
    margin: '0px',
    padding: '0px',
    border: '0px',
    getPropertyValue: vi.fn((property: string) => {
      const styles: Record<string, string> = {
        'display': 'block',
        'visibility': 'visible',
        'opacity': '1',
        'position': 'static',
        'color': 'rgb(0, 0, 0)',
        'background-color': 'rgb(255, 255, 255)',
        'font-size': '16px',
        'font-family': 'Arial',
        'font-weight': 'normal',
        'line-height': 'normal',
        'text-align': 'left',
        'margin': '0px',
        'padding': '0px',
        'border': '0px'
      };
      return styles[property] || '';
    })
  };
  return mockStyle as any;
});

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  log: vi.fn(),
  warn: vi.fn(),
  error: vi.fn()
};
