import genRoomName from '../utils/genRoomName'
const rooms : string[] = []

class roomController {
  static create = (req, res) => {
    res.status(200).json({ room: genRoomName(rooms, 4) })
  }

  static verify = (req, res) => {
    const roomName = req.query.n
    if (roomName) {
      for (let i = 0; i < rooms.length; i++) {
        if (roomName === rooms[i]) { res.status(200).json({ room: roomName }) }
      }
      res.status(404).json({ room: null })
    }
    res.status(400).json({ msg: 'No room was sended' })
  }
}

module.exports = roomController
