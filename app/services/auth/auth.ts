import { TFormLoginValues } from "@/app/components/shared/auth-page/schemas";
import { instance } from "../instance";
import { UserDTO } from "@/types/UserDTO";

export const fetchUser = async (body: TFormLoginValues) => {
    const response = await instance.post<UserDTO>('/auth/signin', body)
    return response
}