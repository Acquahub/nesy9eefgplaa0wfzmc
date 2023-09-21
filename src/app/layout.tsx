import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <html lang="en">
        <head>
        <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
        />
        
        </head>
        <body>
            {children}
            <a
                style="position: absolute;z-index:10;right: 16px;bottom: 16px;padding: 8px 16px;background-color: #fff;box-shadow: 3px 3px 10px 3px rgba(56,28,100,.1);border: 1px solid #eff1f4;border-radius: 5px;font-size: 12px;line-height: 24px;color: #000;font-weight: 500;"
                target="_new" href="https://agua.app"
            >Made in agua.app</a>
        </body>
    </html>
    );
}
                