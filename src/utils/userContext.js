import { createContext } from "react";

// create user context
const userContext = createContext({
    loggedInUser: "",
});

export default userContext;