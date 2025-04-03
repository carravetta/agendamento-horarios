//var db = require(".db"); //firebase - não utilizado
const { log } = require('console');
const NeDB= require('nedb');

    const db = new NeDB({
        filename: 'agendamento.db',
        autoload: true
    })

/*const set = async ()=>{
      var agenda = {
        'horario': '15:00'
      }
      db.firebase().ref("agenda").set(agenda).then(()=>{
        return agenda;
      }
      )
    };*/


    const getAll = async ()=>{
      return new Promise ((resolve, reject)=>{
        db.find({}).exec((error, agendamentos)=>{
          if(err){
            console.log(`ERRO DE BANCO DE DADOS ${err}`);
            reject(err);
          }else{
            console.log(`Agendamentos: ${JSON.stringify(agendamentos)}`);
            resolve(agendamentos)
          }
      })
    })
  }


  const adicionarData = async (agendamento)=>{
    return new Promise ((resolve, reject)=>{
      db.insert(agendamento, ()=>{
        if(err){
          console.log(err);
          reject(err)          
        }
        else{
          console.log(`Agendamento criado com sucesso`);
          resolve(agendamento);  
        }
      });
    });
  }
  
module.exports = {
  getAll, adicionarData
}