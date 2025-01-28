import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-currencies',
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: './currencies.component.html',
  styleUrls: ['../currencies/currencies.component.scss']
})
export class CurrenciesComponent {
  mainCurrency = 'USD';

  availableCurrencies = [
    { name: 'USD', img: 'assets/images/usd.svg' },
    { name: 'GBP', img: 'assets/images/gbp.svg' },
    { name: 'CAD', img: 'assets/images/cad.svg' },
    { name: 'CNY', img: 'assets/images/cny.svg' },
    { name: 'EUR', img: 'assets/images/eur.svg' }
  ];

  fiatCurrencies = [
    { name: 'USD', img: 'assets/images/usd.svg' },
    { name: 'GBP', img: 'assets/images/gbp.svg' },
    { name: 'CAD', img: 'assets/images/cad.svg' },
    { name: 'CNY', img: 'assets/images/cny.svg' },
    { name: 'EUR', img: 'assets/images/eur.svg' }
  ];

  cryptoCurrencies = [
    { name: 'BCH', img: 'assets/images/bch.svg' },
    { name: 'BNB', img: 'assets/images/bnb.svg' },
    { name: 'ADA', img: 'assets/images/ada.svg' },
    { name: 'ETH', img: 'assets/images/eth.svg' }
  ];
}
