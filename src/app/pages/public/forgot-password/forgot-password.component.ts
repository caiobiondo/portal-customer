import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { RestAuthService } from 'src/app/services/rest-auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public isSend: boolean = false;
  public forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    private router: Router,
    private restAuthService: RestAuthService,
  ) { }

  ngOnInit() { }

  goBack() {
    this.router.navigateByUrl('/login');
  }

  async formSubmit() {
    if (this.forgotPasswordForm.valid) {
      (await this.restAuthService.resetPassword(this.forgotPasswordForm.get('email')?.value)).subscribe({
        next: (response) => { console.log(response); },
      });
    }
    this.isSend = true;
  }
}
