import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HashService } from 'src/app/services/hash.service';

@Component({
  selector: 'app-validate-token',
  templateUrl: './validate-token.component.html',
  styleUrls: ['./validate-token.component.css']
})
export class ValidateTokenComponent implements OnInit {

  private token: string | null = '';
  public isValidToken: boolean = false;
  public isLoading: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hashService: HashService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.token = params.get('id');
      if (this.token) this.checkToken();
    });
  }

  async checkToken() {
    (await this.hashService.checkToken('' + this.token)).subscribe({
      next: (token: boolean) => { this.isValidToken = token; this.isLoading = false; },
      error: () => { this.isLoading = false; }
    });
  }

}
