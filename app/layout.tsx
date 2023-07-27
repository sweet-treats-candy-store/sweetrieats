//@ts-nocheck

import "@/styles/globals.css";
import Provider from "@/components/Provider";
import Nav from "@/components/Nav";

interface LayoutProps {
  children: React.ReactNode;
}

// need to create Provider and Nav

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {/* Provider is being setup for user authentication */}
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
