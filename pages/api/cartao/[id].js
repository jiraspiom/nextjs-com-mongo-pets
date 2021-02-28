import dbConnect from '../../../utils/dbConnect'
import Cartao from '../../../models/Cartao'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const cartao = await Cartao.findById(id)
        if (!cartao) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: cartao })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const cartao = await Cartao.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!cartao) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: cartao })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedCartao = await Cartao.deleteOne({ _id: id })
        if (!deletedCartao) {
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
