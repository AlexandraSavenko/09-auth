import { cookies } from "next/headers"
import { api } from "./api";

export const checkServerSession = async () => {
    const cookieStore = await cookies();
    console.log(cookieStore)
    const res = await api.get('/auth/session', {
        headers: {
            Cookie: cookieStore.toString(),
        }
    });
    return res;
}