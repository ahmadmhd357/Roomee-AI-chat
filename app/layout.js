import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import WelcomePage from "@/components/WelcomePage";
import Sidebar from "../components/Sidebar";
import "./globals.css";
import ClientProvider from "@/components/ClientProvider";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          {session ? (
            <div className="flex">
              <Sidebar />

              <ClientProvider />
              <div className=" bg-gray-700 flex-1">{children}</div>
            </div>
          ) : (
            <WelcomePage />
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
