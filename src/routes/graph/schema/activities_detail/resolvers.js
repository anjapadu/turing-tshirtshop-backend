import models from '@models';

export async function list(parent, { activityId, language }, _, __) {
    try {
        const activitiesDetail = await models.activitiesDetail.findAll({
            raw:true,
            where:{
                activityId,
                language
            }
        });
        return activitiesDetail
    } catch (e) {
        console.log({ e })
    }
}

export async function update(parent, activity, _, __){
    try{
        const response = await models.activitiesDetail.update(activity, {
            where:{
                id:activity.id
            }
        })
        return {
            error:false,
            message:"actividad cambiada"
        }
    } catch(e){
        console.log({ e })
    }
}