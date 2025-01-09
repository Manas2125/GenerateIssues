
const conf = {
    clerk_api_key: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string,
    clerk_secret_key: import.meta.env.VITE_CLERK_SECRET_KEY as string,
}

export default conf;