import models from '@models';

export async function fetchDonation() {
    try {
        const response = await models.donation.findAll({
            raw:true
        });
        return response[0];
    } catch (e) {
        console.log(e)
    }
}

export async function updateDonation(parent, data, _, __){
    try{
        console.log(data)
        const response = await models.donation.update(data, {
            where:{
                id:data.id
            }
        })
        if(response[0] > 0){
            return{
                error : false,
                message :"updated"
            }
        }else{
            return{
                error : true,
                message :"not_updated"
            }
        }
    } catch(e){
        console.log(e)
    }
}