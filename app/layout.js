import SessionProvider from "@/components/SessionProvider";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth/next";
import WelcomePage from "@/components/WelcomePage";
import Sidebar from "../components/Sidebar";
import "./globals.css";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ClientProvider from "@/components/ClientProvider";

export default async function RootLayout({ children }) {
  const cookiesList = cookies();
  const session = cookiesList.get("next-auth.session-token");
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session?.value}>
          {session ? (
            <div className="flex">
              <div className="bg-gray-900 max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <Sidebar />
              </div>
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
