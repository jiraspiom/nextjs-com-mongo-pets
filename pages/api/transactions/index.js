import dbConnect from '../../../utils/dbConnect'
import Documento from '../../../models/Transaction'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const documentos = await Documento.find({}) /* find all the data in our database */
        res.status(200).json({ success: true, data: documentos })
      } catch (error) {
        res.status(400).json({ success: false, erro: error })
      }
      break
    case 'POST':
      try {
        const documento = await Documento.create(
          req.body
        )
        res.status(201).json({ success: true, data: documento })
      } catch (error) {
        res.status(400).json({ success: false, erro: error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

 const salario_valor_tempo = (valor, minutos = 1) =>{
  valor_hora = valor / 220
  valor_minuto = valor_hora / 60
  if (minutos != 1){
    valor_tempo = valor_minuto * minutos
  }else{
    valor_tempo = "não definido"
  }
  return {valorhora: valor_hora, valorminuto: valor_minuto,  valortempo: valor_tempo}
}