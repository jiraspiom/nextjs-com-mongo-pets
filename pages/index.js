import Link from 'next/link'
import dbConnect from '../utils/dbConnect'
import Pet from '../models/Pet'

import { useSession } from 'next-auth/client'

const Index = ({ pets }) => (
  <>
    {/* Create a card for each pet */}
    {pets.map((pet) => (
      <div key={pet._id}>
        <div className="card">
          <img src={pet.image_url} />
          <h5 className="pet-name">{pet.name}</h5>
          <div className="main-content">
            <p className="pet-name">{pet.name}</p>
            <p className="owner">Proprietario: {pet.owner_name}</p>

            {/* Extra Pet Info: Likes and Dislikes */}
            <div className="likes info">
              <p className="label">Gosta</p>
              <ul>
                {pet.likes.map((data, index) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div>
            <div className="dislikes info">
              <p className="label">Não gosta</p>
              <ul>
                {pet.dislikes.map((data, index) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div>

            <div className="btn-container">
              <Link href="/[id]/edit" as={`/${pet._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/[id]" as={`/${pet._id}`}>
                <button className="btn view">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
)

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()
  const [ session, loading ] = useSession()

  /* find all the data in our database */
  const result = await Pet.find({})
  const pets = result.map((doc) => {
    const pet = doc.toObject()
    pet._id = pet._id.toString()
    return pet
  })

  return { props: { pets: pets } }
}

export default Index
