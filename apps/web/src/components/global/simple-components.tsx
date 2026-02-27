import type { PortableTextReactComponents } from 'next-sanity';

export const simpleComponent: PortableTextReactComponents = {
  types: {},
  block: {
    h1: ({ children }) => (
      <h1 className="my-4 text-2xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="my-3 text-xl font-semibold">{children}</h2>
    ),
    normal: ({ children }) => <p className="my-2">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-2 list-disc pl-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-2 list-decimal pl-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="my-1">{children}</li>,
    number: ({ children }) => <li className="my-1">{children}</li>,
  },
  marks: {},
  hardBreak: false,
  unknownList: () => <></>,
  unknownListItem: () => <></>,
  unknownMark: () => <></>,
  unknownType: () => <></>,
  unknownBlockStyle: () => <></>,
};
