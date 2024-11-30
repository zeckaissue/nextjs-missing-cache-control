
export const dynamic = 'force-static';
export const revalidate = 43;

export default function Page() {
  return (
    <div >
      This page should have a cache-control header set to 43 seconds.
    </div>
  );
}
