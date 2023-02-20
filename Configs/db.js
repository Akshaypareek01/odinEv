import mongoose from 'mongoose'

export const connection = async () => {
  try {
    mongoose.connect(
      '',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    console.log('DB CONNECTION ESTABLISHED')
  } catch (err) {
    console.log(err)
  }
}




