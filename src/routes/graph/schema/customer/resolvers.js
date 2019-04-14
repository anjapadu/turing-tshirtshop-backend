import models from '@models'
import sha1 from 'sha1';

let _customerCustomAttributes = {
    shippingRegionName: [models.Sequelize.literal("`shipping_region`.`shipping_region`"), 'shippingRegionName'],
    shippingRegionId: [models.Sequelize.literal("`shipping_region`.`shipping_region_id`"), 'shippingRegionId']
}

export const fetchCustomers = async (parent, data, _, __) => {
    let selectionSet = __.selectionSet(_customerCustomAttributes);
    return await models.customer.findAll({
        //Ask only for cols needed
        attributes: selectionSet,
        include: [
            {
                attributes: [],
                model: models.shipping_region
            }
        ],
        raw: true
    })
}

export const logInCustomer = async (parent, data, _, __) => {

    let selectionSet = __.selectionSet(_customerCustomAttributes);
    const { email, password } = data;
    //Find customer by email
    const response = await models.customer.findOne({
        attributes: [...selectionSet, 'password'],
        where: {
            email
        },
        include: [
            {
                attributes: [],
                model: models.shipping_region
            }
        ],
        raw: true
    })
    if (!response)
        //If null user not exist
        throw new Error("USER_NOT_EXIST")
    //validate password
    if (sha1(password) === response.password)
        return response;
    //if pass don't match
    throw new Error("WRONG_PASS")
}

//Using sha1 instead of bcrypt because the max size of password column is VARCHAR(50).
export const registerCustomer = async (parent, data, _, __) => {
    const {
        firstname,
        lastname,
        email,
        password
    } = data;
    const count = await models.customer.count({
        where: {
            email
        },
        raw: true
    })
    if (count > 0) {
        throw new Error("USER_EXISTS")
    }
    try {
        const insertQuery = await models.customer.create({
            name: `${firstname} ${lastname}`,
            email,
            password: sha1(password)
        }, {
                raw: true
            })

        return insertQuery.get({ plain: true })
    } catch (e) {
        throw new Error("INSERT_ERROR")
    }
}