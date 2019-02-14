import { DateTime, Email, URL } from './scalars'
import CRUD from './CRUD'

const crud = new CRUD()

const getEvent = async (args, context) => {
  const { Item } = await crud.read({ collection: 'Event', key: args })
  console.log(Item)
  return Item
}

export default { DateTime, Email, URL, getEvent }
