import mongoose from 'mongoose'
import { ENV_VARS } from './envVars.js'

export const database = async (req, res) => {
  try {
    const response = await mongoose.connect(ENV_VARS.MONGO_URI)
    console.log('MongoDB connected :' + response.connection.host)
  } catch (error) {
    console.log('DATABASE NOT CONNECTED', error.message)
    process.exit(1) //1 means the wa a error, 0 means fsuccess
  }
}
