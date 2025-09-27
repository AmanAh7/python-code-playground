import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata = {
  title: "Python Code Playground",
  description: "Interactive Python projects showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <nav className="nav-header">
          <div className="nav-container">
            <div className="nav-content">
              <div className="nav-logo">
                <div className="logo-icon">Py</div>
                <h1 className="logo-text">Python Code Playground</h1>
              </div>
              <div className="nav-tags">
                <span>Interactive • Live Code • Portfolio</span>
              </div>
            </div>
          </div>
        </nav>
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
