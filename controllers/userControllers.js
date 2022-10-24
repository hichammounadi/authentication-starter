const jwt = require('jsonwebtoken')
const {

    getUsersService,
    registerUserService,
    getUserByIdOrEmailService
} = require('../services/userServices')


const {StatusCodes} = require('http-status-codes')

const CustomError = require('../shared-services/errors')



const registerUserController = async(req, res) => {
}


const loginUserController = async(req, res) => {
}


const getUsersController = async(req, res) => {
    const users = await getUsersService()
    res.status(StatusCodes.OK).json({users: users})
}


module.exports = {
    registerUserController,
    loginUserController,
    getUsersController
}