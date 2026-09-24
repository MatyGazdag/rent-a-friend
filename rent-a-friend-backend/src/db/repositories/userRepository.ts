import type { userBodyReqSchemInput } from "@rentafriend/shared";
import { db } from "../db";

export async function FindUserByUsernamme(username: string) {
    return await db.selectFrom('users')
        .where('username', '=', username)
        .selectAll()
        .executeTakeFirst();
}

export async function CreateUser(params : userBodyReqSchemInput) {
    await db.insertInto('users')
        .values({
            username: params.username,
            email: params.email,
            password: params.password,
        })
        .execute();
}