import createMDX from '@next/mdx';
import { withContentCollections } from "@content-collections/next";

//const nextConfig: NextConfig = {
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}
const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
})

export default withContentCollections(withMDX(nextConfig));

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
