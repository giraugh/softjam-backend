import { Request, Response, NextFunction } from 'express'

export default (type: string, params: string[]) => (req: Request, res: Response, next: NextFunction) => {
  const hasType = !!req[type]
  if (!hasType) {
    res
      .status(400)
      .send('Parameters missing. Requires parameters: ' + params.join(', '))
    return
  }
  const hasParams = params.every(param => !!req[type][param])
  if (!hasParams) {
    res
      .status(400)
      .send('Invalid Parameters. Requires parameters: ' + params.join(', '))
    return
  } else {
    next()
  }
}