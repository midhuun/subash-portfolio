import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Subash Kannan - Business Analyst & Python Developer',
  description: 'Elite portfolio of Subash Kannan - Business Analyst, Data Storyteller, and Python Developer specializing in retail operations and machine learning.',
  keywords: 'Business Analyst, Python Developer, Data Science, Machine Learning, Portfolio',
  authors: [{ name: 'Subash Kannan' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}