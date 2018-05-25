import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { Cliente } from '../../modelo/cliente';
import { SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class ClienteProvider {

  constructor(private dbProvider: DatabaseProvider) {
    
  }

  public inserir(cliente: Cliente){
    return this.dbProvider.openDatabase().then((db:SQLiteObject) => {
      let sql = "INSERT INTO cliente (nome, fone, email) VALUES (?,?,?)";
      let parametros = [cliente.nome, cliente.fone, cliente.email];
      return db.executeSql(sql, parametros)
      .catch((e) => {
        console.log(e);
      })
    }).catch((e) => {
      console.log(e);
    });
  }
}
