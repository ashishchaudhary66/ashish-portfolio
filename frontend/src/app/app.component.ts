import {Component,AfterViewInit,OnDestroy,inject} from '@angular/core';
import {CommonModule} from '@angular/common'; import {FormsModule} from '@angular/forms'; import {PortfolioService} from './portfolio.service';
@Component({selector:'app-root',standalone:true,imports:[CommonModule,FormsModule],templateUrl:'./app.component.html',styleUrls:['./app.component.css']})
export class AppComponent implements AfterViewInit,OnDestroy{
 private api=inject(PortfolioService); year=new Date().getFullYear(); menu=false; sending=false; status=''; error=false; form={name:'',email:'',message:''}; private observer?:IntersectionObserver;
 ngAfterViewInit(){this.observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');this.observer?.unobserve(e.target);}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>this.observer?.observe(x));}
 ngOnDestroy(){this.observer?.disconnect();}
 send(){this.sending=true;this.status='';this.error=false;this.api.sendMessage(this.form).subscribe({next:()=>{this.status='Thanks! Your message has been received.';this.form={name:'',email:'',message:''};this.sending=false;},error:()=>{this.status='Contact service unavailable. Please email me directly.';this.error=true;this.sending=false;}});}
}
