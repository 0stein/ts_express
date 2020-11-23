import { sql } from 'slonik'
import { pool } from '../db/db'
//import Member from '../domain/member'

export function getMembers(): Promise<any>{
    return pool.any(sql`SELECT * FROM member`)
}

