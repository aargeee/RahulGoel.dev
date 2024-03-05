import {cookies} from "next/headers";

export default function Message() {
    const viewedWelcomeMessage = cookies().get("viewedWelcomeMessage")
    if (viewedWelcomeMessage) {
        return <div>Welcome back!</div>
    }
    // Note that since this is a server component, 
    //   we cannot set the cookie here
    return <div>Welcome!</div>
}