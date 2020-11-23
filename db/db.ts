import * as db from 'slonik'

export const pool = db.createPool("postgres://scott:1234@localhost:5432/testdb")
