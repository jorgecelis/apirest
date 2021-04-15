const Users = require("../models/schema.user");

/**
 * Entidad para el manejo de servicios.
 */
class UserService {
  /**
   * Obtener toda la información, conectándose a un servicio.
   * @param {JSON} req - Solicitud HTTP a la función de middleware, denominado "req" por convención.
   * @return {Array} todos los nombres.
   */

  //Find and show all users
  //
  static async getAll(req) {
    // console.log(req.params);
    // console.log(req.query);
    let users = await Users.find();
    return users;
  }

  //Create user
  static async save(req) {
    //console.log("entre al service", req.body);
    let users = await Users.create(req.body);
    return users;
  }
  //Find one user by id
  static async getById(req) {
    let users = await Users.findById(req.params.id);

    return users;
  }

  //Update user
  static async update(req) {
    let users = await Users.findByIdAndUpdate(req.params.id, {
      displayName: req.body.displayName,
      email: req.body.email,
      emailVerified: req.body.emailVerified,
      uid: req.body.uid,
      //  photoURL: { type: format },
    });

    return users;
  }

  //Delete user
  static async delete(req) {
    await Users.findByIdAndDelete(req.params.id);
    return "usuario eliminado";
  }

  //Find mail
  static async getMail(req) {
    // console.log("estoy en el service", req.params);

    let users = await Users.find({ email: { $in: req.params.email } });
    // console.log("usuario mail", users);
    return users;
  }
}

module.exports = UserService;
