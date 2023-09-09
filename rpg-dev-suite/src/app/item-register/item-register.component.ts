import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { Observable } from 'rxjs';
import { Potion } from '../Models/item models';
import { ItemsAPIService } from '../services/items-api.service';

@Component({
  selector: 'app-item-register',
  templateUrl: './item-register.component.html',
  styleUrls: ['./item-register.component.css']
})
export class ItemRegisterComponent {

  items = new Observable<Potion[]>();

  menuTypes = ['MONSTROS', 'ARMAS', 'ITENS', 'ARMADURAS', 'ESCUDOS']

  itemTypes: any = [ 
    {type: 'Consumível'}, 
    {type: 'Forja'},
    {type: 'Utilidade'} 
  ]
  selectedType: any = null;

  itemRarity = [
    {rarity: 'Incomum'},
    {rarity: 'Comum'},
    {rarity: 'Raro'},
    {rarity: 'Epico'},
    {rarity: 'Lendário'}
  ]
  selectedRarity: any = null;

  itemClass = [
    { class: 'Todas'},
    { class: 'Espadachim'},
    { class: 'Caçador'},
    { class: 'Mago'},
    { class: 'Assassino'}
  ]
  selectedClass: any = null;

  ItemName!: string;
  type: string = '';
  desc?: string;
  effect?: string;
  img!: string;
  rarity!: string;
  class!: string;
  weight: number =0;
  value: number = 0;

  isExpanded = false;

  incrementInterval: any = null;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(private itemsAPIService: ItemsAPIService) {
    this.getItems()
    
  } 

  getItems() {
    this.items = this.itemsAPIService.getItemsService()  
  }

  startIncrementValue() {
    this.incrementInterval = setInterval(() => {
      this.weight++;
    }, 50); // Aumenta a cada 50 milissegundos
  }

  startDecrementValue() {
    this.incrementInterval = setInterval(() => {
      if (this.weight <= 0) {
        this.weight = 0;
  
      }
      else {
        this.weight--;
      }
    }, 50); // Aumenta a cada 50 milissegundos
  }

  stopValue() {
    clearInterval(this.incrementInterval);
  }

  createNewItem() {

    const itemPotion: Potion = {
      ItemName: this.ItemName,
      item_type: this.selectedType.type,
      item_desc: this.desc,
      item_effect: this.effect,
      item_weight: this.weight,
      item_value: this.value,
      item_img: this.img,
      item_rarity: this.selectedRarity.rarity,
      item_class: this.selectedClass.class,
    }
    
    this.itemsAPIService.createItemService(itemPotion).subscribe((response) => {
      //console.log(itemPotion)
      this.getItems()
    
    });
  }

  isDisabled = true

  CanButtoEnable() {
    //if(this.desc !== null){
      this.isDisabled = false
    //}
     console.log(this.desc) 
  }


}
