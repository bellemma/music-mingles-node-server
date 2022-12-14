import * as mingleDao from './mingles-dao.js'


export const getMingles = () => mingles;

const MinglesController = (app) => {

  const createMingle   = async (req, res) => {
    const movie = req.body
    // movie["_id"] = (new Date()).getTime() + ''
    // movie["likes"] = 0
    // movie["liked"] = false
    // movies.push(movie)
    const actualMingle = await mingleDao.createMingle(movie)
    res.send(actualMingle)
  }
  const findAllMingles = async (req, res) => {
    const minglesInDatabase = await mingleDao.findAllMingles()
    res.send(minglesInDatabase)
  }
  const updateMingle   = (req, res) => {
    const mid = req.params['mid']
    const mingleUpdates = req.body
    const mingleIndex = mingles.findIndex(
        (m) => m._id === mid)
    mingles[mingleIndex] = {
      ...mingles[mingleIndex],
      ...mingleUpdates
    }
    res.send(200)
  }
  const deleteMingle   = async (req, res) => {
    const mid = req.params['mid']
    const status = await mingleDao.deleteMingle(mid)
    // movies = movies.filter(
    //     (m) => m._id !== mid)
    res.send(status)
  }

  app.post  ('/movies', createMingle)
  app.get   ('/movies', findAllMingles)
  app.put   ('/movies/:mid', updateMingle)
  app.delete('/movies/:mid', deleteMingle)
}

export default MoviesController;