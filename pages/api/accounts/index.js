import dbConnect from '../../../utils/dbConnect'
import Account from '../../../models/Account'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const accounts = await Account.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: accounts })
      } catch (error) {
        res.status(400).json({ success: false, erro: error})
      }
      break
    case 'POST':
      try {

        const account = await Account.create(
            req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: account })
      } catch (error) {
        res.status(400).json({ success: false, erro: error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

