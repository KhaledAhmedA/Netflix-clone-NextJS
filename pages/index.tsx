import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from '@/components/Navbar';
import Billboard from "@/components/Billboard";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }
  return {
    props: {}
  }
}


export default function Home() {


  return (
    <>
      <Navbar />
      <Billboard />
    </>
  )
}




// https://internal.iti.gov.eg/iti/ICC/Round1%2023%2024/application/progress

// npx create-next-app --typescript
// npm run dev
// npm install -D tailwindcss postcss autoprefixer
// npm tailwindcss init -p
// npm install -D prisma
// npx prisma init
// npm install @prisma/client
// npx prisma db push // to push database in mongodb atlas
// npm install next-auth
// npm install bcrypt
// npm i -D @types/bcrypt
// npm i axios
// npm install react-icons
// npm install @next-auth/prisma-adapter
// npm install swr