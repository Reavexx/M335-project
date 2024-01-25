import { registerPlugin } from '@capacitor/core';

import type { BarcodeScannerPlugin } from './definition';

const BarcodeScanner = registerPlugin<BarcodeScannerPlugin>('BarcodeScanner', {
  web: () => import('./web').then((m) => new m.BarcodeScannerWeb()),
});

export * from './definition';
export { BarcodeScanner };
