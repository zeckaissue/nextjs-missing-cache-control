
export const dynamic = 'force-static';
export const revalidate = 10;

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export default async function Page({
    params,
}: {
    params: { slug: string }
}) {
    console.log('rendering page with slug:', params.slug)
    await wait(100)
    return <div >
        This page should have a cache-control header set to 43 seconds. (slug:{params.slug})
    </div>
}