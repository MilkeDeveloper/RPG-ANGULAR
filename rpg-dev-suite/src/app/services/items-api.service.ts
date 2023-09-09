import { Potion } from '../Models/item models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsAPIService {

  private url = 'http://127.0.0.1:8080/itens/potions'

  constructor(private httpClient: HttpClient) {
    this.getItemsService()
  }

  getItemsService() {
    const potionList = this.httpClient.get<Potion[]>(this.url)
    //console.log(potionList)
    return potionList
  }

  createItemService(item: Potion) {
    const itemPotion = this.httpClient.post<Potion>(this.url, item)
    return itemPotion
  }
}
