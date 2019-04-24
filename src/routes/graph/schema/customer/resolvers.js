import models from '@models'
import sha1 from 'sha1';
import { selectionSet } from '../../../../lib/utils'
import {
    encode
} from '../../../../lib/crypt';

let _customerCustomAttributes = {
    shippingRegionName: [models.Sequelize.literal("`shipping_region`.`shipping_region`"), 'shippingRegionName'],
    shippingRegionId: [models.Sequelize.literal("`shipping_region`.`shipping_region_id`"), 'shippingRegionId']
}
export const fetchCustomers = async (parent, data, _, __) => {
    let _selectionSet = selectionSet(__, _customerCustomAttributes);
    return await models.customer.findAll({
        /**
         * Ask only for cols needed
         */
        attributes: _selectionSet,
        include: [
            {
                attributes: [],
                model: models.shipping_region
            }
        ],
        raw: true
    })
}

/**
 * Login
 */
export const logInCustomer = async (parent, data, _, __) => {

    let _selectionSet = selectionSet(__, _customerCustomAttributes).filter(item => item != 'token');
    const { email, password } = data;
    /**
     * Find customer by email
     */
    const response = await models.customer.findOne({
        attributes: [..._selectionSet, 'password', 'id'],
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
        /**
         * If null user not exist
         */
        throw new Error("USER_NOT_EXIST")
    /**
     * validate password
     */
    if (sha1(password) === response.password) {
        response["token"] = encode(JSON.stringify({ id: response.id, scope: 'user', expiration: null }))
        return response;
    }
    /**
     * if pass don't match
     */
    throw new Error("WRONG_PASS")
}


/**
 * Register
 * Using sha1 instead of bcrypt because the max size of password column is VARCHAR(50).
 */
export const registerCustomer = async (parent, data, _, __) => {
    const {
        firstname,
        lastname,
        email,
        password,
        isGoogle = false
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
        let response = insertQuery.get({ plain: true })
        response["token"] = encode(JSON.stringify({ id: response.id, scope: 'user', expiration: null }));
        return response;
    } catch (e) {
        throw new Error("INSERT_ERROR")
    }
}