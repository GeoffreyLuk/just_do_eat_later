import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes All existing ebtries
    await knex("exercises").del();

    let intensity_id = await knex.select('id').from('intensities').first();
    console.log({ intensity_id });


    // Inserts seed enteries
    await knex("exercises").insert([
        {
            name: "push up",
            intensity_id: intensity_id.id
        },
        {
            name: "burbee",
            intensity_id: intensity_id.id
        },
        {
            name: "planks",
            intensity_id: intensity_id.id
        },
        {
            name: "leg rasise",
            intensity_id: intensity_id.id
        },
        {
            name: "lunges",
            intensity_id: intensity_id.id
        },
        {
            name: "squats",
            intensity_id: intensity_id.id
        }
    ])

}