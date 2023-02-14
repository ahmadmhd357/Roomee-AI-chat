import SessionProvider from "@/components/SessionProvider";
import { cookies } from "next/headers";
import WelcomePage from "@/components/WelcomePage";
import Sidebar from "../components/Sidebar";
import "./globals.css";
import ClientProvider from "@/components/ClientProvider";

export default async function RootLayout({ children }) {
  const cookiesList = cookies();
  const session = cookiesList.get("next-auth.session-token");
   console.log(session);
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session?.value}>
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
