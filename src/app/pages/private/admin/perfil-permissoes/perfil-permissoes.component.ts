import { Component, OnInit } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-permissoes',
  templateUrl: './perfil-permissoes.component.html',
  styleUrls: ['./perfil-permissoes.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PerfilPermissoesComponent implements OnInit {

  public isAdministracao: boolean = false;
  public isGerenciamento: boolean = false;
  public isColaborativo: boolean = false;
  public isAnalistaFiscal: boolean = false;
  public isAnalistaRh: boolean = false;
  public isEstagiario: boolean = false;
  [key: string]: any; // nome de variavel dinamico

  cnpjs: string[] = [
    '20633877000112',
    '30522966000178',
    '80711944000145',
  ];
  selectedCnpj: string = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCnpj(event: any) {
    this.selectedCnpj = event.target.value;
  }

  openUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  openCard(code: any) {
    this['' + code] = !this['' + code];
  }
}
