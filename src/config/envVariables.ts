export const nodeEnv = process.env.NODE_ENV
if (nodeEnv === 'local') console.log(process.env)

export const mongoURI = process.env.MONGO_URI
export const port = process.env.PORT || 5001
