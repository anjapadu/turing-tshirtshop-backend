import models from '@models';

export async function list(parent, { dayId }, _, __) {
    try {
        const activities = await models.activities.findAll({
            raw:true,
            order: [['hour', 'ASC']],
            where:{
                dayId,
                status:true
            }
        });
        return activities
    } catch (e) {
        console.log({ e })
    }
}

export async function remove(parent, { ids }, _, __){
    try{
        await models.activities.update({
            status:false
        }, {
            where:{
                id:ids.split(",")
            }
        })
        return {
            error:false,
            message:"actividad removida"
        }
    } catch(e){
        console.log({ e })
    }
}

export async function add(parent, { dayId, hour }, _, __){
    try{
        await models.activities.create({
            dayId,
            hour,
            status:true
        })
        return {
            error:false,
            message:"actividad creada"
        }
    }catch(e){
        console.log("Error add ", e)
    }
}

export async function update(parent, activity, _, __){
    try{
        await models.activities.update(activity, {
            where:{
                id:activity.id
            }
        })
        return {
            error:false,
            message:"actividad creada"
        }
    }catch(e){
        console.log("Erro update", e);
    }
}