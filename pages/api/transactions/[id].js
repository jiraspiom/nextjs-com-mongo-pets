import dbConnect from '../../../utils/dbConnect'
import Documento from '../../../models/Transaction'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const documento = await Documento.findById(id)
        if (!documento) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: documento })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const documento = await Documento.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!documento) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: documento })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedDocumento = await Documento.deleteOne({ _id: id })
        if (!deletedDocumento) {
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
