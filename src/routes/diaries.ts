import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../util'
const router = express.Router()
router.get('/', (_req, res) => {
  res.send(diaryServices.getEntrieseWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = res.send(diaryServices.finByID(+req.params.id))

  return (diary != null)
    ? res.send(diary)
    : res.status(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
