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
      msg: `No existe un usuario con el id ${id}.`
    });
  }
}

export const postUser = async(req: Request, res: Response) => {
  const { body } = req;

  try {
    const existMail = await User.findOne({
      where: { email: body.email }
    })

    if (!existMail) {
      const user = User.build(body);
      await user.save();
      res.json({user});
      return;
    } else {
      res.status(400).json({
        msg: `El mail ya existe en la base de datos.`
      })
    }

  } catch (error) {
    console.info(error);
    res.status(500).json({
      msg: `Hubo un error con la carga de datos.`
    })
    return;
  }
}

export const putUser = async(req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const user = await User.findByPk( id );
    if (!user) {
      return res.status(404).json({
        msg: `El usuario con el ${id} no existe.`
      });
    }

    await user.update( body )
      res.json(user);
      return res.status(200).json({
        msg: `Usuario actualizado exitosamente.`
      });

  } catch (error) {
    console.info(error);
    res.status(500).json({
      msg: `Hubo un error con la carga de datos.`
    })
    return;
  }
}


export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: 'deleteUser',
    id
  })
}