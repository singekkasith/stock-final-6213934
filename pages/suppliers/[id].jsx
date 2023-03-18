import Head from "next/head"
import Link from "next/link"


// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Supplier({ supplier }) {
  console.log('blog 2', supplier)
  if (!supplier) return (
    <div>
      <p>Record not found</p>
      <Link href="/suppliers">Back</Link>
      </div>
  );

  return (
    <>
      <Head>
        <title>{supplier.name}</title>
      </Head>

      <h1>{supplier.name}</h1>
      <p>{supplier.address}</p>
      <Link href="/suppliers">Back</Link>
    </>
  )
}

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params)
  const res = await fetch(`http://localhost:3000/api/suppliers/records/${params.id}`)
  const supplier = await res.json()
  console.debug('blog 1', supplier)
  return { props: { supplier } }
}