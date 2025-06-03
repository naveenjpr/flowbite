import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['flowbite-react.com'],
      },
};

export default withFlowbiteReact(nextConfig);