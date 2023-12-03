import { Entity, Fields, Validators } from "remult";

@Entity('inspections', {
    allowApiCrud: true,
})

export class Inspection {
    @Fields.autoIncrement()
    inspection_id = 0;
    @Fields.integer()
    bus_id = 0;
    @Fields.date()
    insp_date = '';
    @Fields.string({
        validate: Validators.required
    })
    insp_comment = ''
}