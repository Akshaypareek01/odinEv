import mongoose from 'mongoose'

export const connection = async () => {
  try {
    const url=" ";
    mongoose.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    console.log('DB CONNECTION ESTABLISHED ...')
  } catch (err) {
    console.log(err)
  }
}




