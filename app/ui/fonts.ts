import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  subsets: ['latin'], // Specify language subsets if needed
  weight: ['400'], // Optional: Specify font weights (default: 400)
});
