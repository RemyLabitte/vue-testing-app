import type { PostCommentsInterface } from "./PostCommentsInterface"
import type { UserInformations } from "./UserInformations"

export interface PostByUser {
    id: number
    userId: number
    userInformations: UserInformations
    title: string
    body: string,
    comments: PostCommentsInterface
}