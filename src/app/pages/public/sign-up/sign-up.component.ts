import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestAuthService } from '../../../services/rest-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    first_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]), //(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&]).{8,} //('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
    password2: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl(false, [Validators.requiredTrue]),
  });
  public eyePass: boolean = false;
  public eyeReapetPass: boolean = false;
  public isSend: boolean = false;

  constructor(
    private router: Router,
    private restapiService: RestAuthService,
  ) { }

  ngOnInit() { }

  goBack() {
    this.router.navigateByUrl('/login');
  }

  toggleEyePass() {
    this.eyePass = !this.eyePass;
  }

  toggleEyeReapetPass() {
    this.eyeReapetPass = !this.eyeReapetPass;
  }

  confirmPassword() {
    if (this.signUpForm.controls['password'].value == this.signUpForm.controls['password2'].value) {
      this.signUpForm.patchValue({ confirmPassword: true });
    } else {
      this.signUpForm.patchValue({ confirmPassword: false });
    }

  }

  formSubmit(): void {
    console.log('0');
    // http://example.com/activate/Mw/awxvli-7c8c23170faedf344b66bf8ec5d24510
    if (this.signUpForm.valid) {
      console.log('1');
      this.restapiService.register(this.signUpForm.value).subscribe({
        next: (resp) => { console.log('3'); this.isSend = true; },
        error: (err) => { console.log(err); }
      });
    }
  }

}
