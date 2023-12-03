import { remultExpress } from "remult/remult-express"
import { Inspection } from "src/shared/inspect"
import { createPostgresConnection } from "remult/postgres"

export const api = remultExpress({
    entities:[Inspection],
    dataProvider: createPostgresConnection({
        connectionString: 'postgres://postgres:postgres@localhost/buses1'
    })
})