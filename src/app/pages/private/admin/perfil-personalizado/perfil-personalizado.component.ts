import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-personalizado',
  templateUrl: './perfil-personalizado.component.html',
  styleUrls: ['./perfil-personalizado.component.scss']
})
export class PerfilPersonalizadoComponent implements OnInit {

  perfilPersonalizadoForm: FormGroup = new FormGroup({
    cnpj: new FormControl(0),
    nomePerfilPersonalizado: new FormControl('Nome do Perfil *', [Validators.required]),
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    if (this.route.snapshot.params.id != undefined && this.route.snapshot.params.modulo != undefined) {
      this.perfilPersonalizadoForm.patchValue({
        cnpj: this.route.snapshot.params.id,
        nomePerfilPersonalizado: this.route.snapshot.params.modulo,
      });
    }
  }

  ngOnInit(): void {
  }

  save() {
    if (this.perfilPersonalizadoForm.valid) {

    }
  }
}
