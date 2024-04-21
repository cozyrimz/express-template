import express from 'express'
import { getActualsData } from '../controllers/actuals'
import { logApiError, logServerError } from '../controllers/error'
import { getActualsDataValidation } from '../validators'

const router = express.Router()

router.get('/v1/getActualsData', getActualsDataValidation, (req, res, next) =>
  getActualsData(req, res, next).catch((err) => {
    return logApiError(req, res, next, err, 500, 'Custom error statement')
  }),
)

export default router
