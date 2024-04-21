import * as dotenv from 'dotenv'
import express from 'express'
const app = express()
dotenv.config({ path: `${process.cwd()}/.env` })

import cors from 'cors'
import morgan from 'morgan'
import { genericExpressErrorHandler } from './controllers/error'
import actualsRoutes from './routes/testRoutes'
import { runSampleJob } from './scheduledJobs'
// import { authorizeRoute } from './controllers/auth';
import { nodeEnv, port } from './config/envVariables'
import { connectToDB } from './config/server'

// activate morgan logging
app.use(morgan('dev'))

// establish DB connection
connectToDB().then(async () => {
  // dev stuff here
  // await createOrg().catch((err) => console.error(err.message));
})

// set whitelist - might be temporary before other security measures are established
let whiteList: RegExp[] = [/^https:\/\/sample-domain\.netlify\.app$/, /sample-domain\.netlify\.app/]

// allow local front ends into the server
if (nodeEnv === 'local') {
  whiteList = whiteList.concat([/^http:\/\/localhost:300.$/, /^http:\/\/localhost:1234$/, /^http:\/\/localhost:5173$/])
}

const corsOptions = {
  origin: (origin, callback) => {
    let found = false
    for (const reg of whiteList) {
      if (reg.test(origin)) {
        found = true
        break
      }
    }

    if (found || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Hey So This is not Allowed by CORS'))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

// route parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application routes
app.use('/api/sample', actualsRoutes)

app.use('*', genericExpressErrorHandler)

//run scheduled jobs
if (process.env.NODE_ENV !== 'local') {
  runSampleJob()
}

// Start Listening on Port
app.listen(port, () => {
  console.log(
    `A ${
      process.env.NODE_ENV ? process.env.NODE_ENV.toUpperCase() : 'NO ENV FILE'
    } Node JS Server is listening on port ${port}`,
  )
})
