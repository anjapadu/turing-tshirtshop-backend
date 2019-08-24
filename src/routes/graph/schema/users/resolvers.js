import models from '@models';

export async function login(parent, data, _, __) {
    try {
        const user = await models.users.findOne({
            raw:true,
            where:{
                ...data,
                status:true
            }
        })
        console.log(user)
        return user
    } catch (e) {
        console.log({ e })
    }
}
