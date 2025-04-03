const agendaModel = require('../models/agendaModel');

/*const set = async (req, res)=>{
    const agenda = await agendaModel.getAll()
    return res.status(200).json(agenda);
}*/

const getAll = async (_req, res)=>{
    const agendamentos = await agendaModel.getAll();
    return res.status(200).json(agendamentos);
}

const adicionarData = async (req, res)=>{
    const agendamento = await agendaModel.adicionarData(req.body);
    return res.status(200).json(agendamento);
}

module.exports = {
    getAll, adicionarData
}