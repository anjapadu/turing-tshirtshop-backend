import models from '@models';

export async function list(parent, data, _, __) {
    try {
        const days = await models.eventDays.findAll();
        return days
    } catch (e) {
        console.log({ e })
    }
}