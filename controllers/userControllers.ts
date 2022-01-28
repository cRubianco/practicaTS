import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async(req: Request, res: Response) => {
  const users = await User.findAll();
  
  res.json(
    { users }
  )
}

export const getUser = async(req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (user) {
    res.json({ user })
  } else {
    res.status(404).json({
      msg: `No existe un usuario con el id ${id}`
    });
  }
}

export const postUser = async(req: Request, res: Response) => {
  const { body } = req;

  try {
    const us = User.build(body);
    await us.save();
    res.json({us});
    return;
  } catch (error) {
    console.info(error);
    res.status(500).json({
      msg: `Hubo un error con la carga de datos `
    })
    return;
  }
}

export const putUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    msg: 'putUser',
    id,
    body
  })
}

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: 'deleteUser',
    id
  })
}