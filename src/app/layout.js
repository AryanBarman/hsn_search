import { AppProvider } from './contexts/AppContext';
export const metadata = {
  title: 'HSN Search',
  description: 'created by aryan',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}