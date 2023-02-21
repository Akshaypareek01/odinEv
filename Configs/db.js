import mongoose from 'mongoose'

export const connection = async () => {
  try {
    mongoose.set('strictQuery', false);
    const url="mongodb://127.0.0.1:27017/odinev";
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




