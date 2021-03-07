import dbConnect from '../../../utils/dbConnect'
import Account from '../../../models/Account'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const account = await Account.findById(id)
        if (!account) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: account })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const account = await Account.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!account) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: account })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedAccount = await Account.deleteOne({ _id: id })
        if (!deletedAccount) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
