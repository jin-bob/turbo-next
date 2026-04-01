import type { MouseEvent } from 'react';

export default function copyToClipboard(text: string, type = 'Data') {
  const value = text?.trim?.();

  return (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!value) {
      console.error(`No ${type} to add to clipboard`);

      return;
    }

    navigator.clipboard.writeText(text).catch((error) => {
      console.error(error);
      console.error(`${type} didn't copied to clipboard`);
    });
  };
}
