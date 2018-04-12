import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public msg:any;

  public username:any;

  public flag:any;

  public search:any;

  public name:any;
  public list:any[];

  constructor() {
       
   }

  ngOnInit() {
    this.msg='这是一个首页组件';
       this.username='张三';
       this.flag=true;

       this.search='搜索内容'; 

       this.list=[];
       this.name='';
    
  }

  // 自定义方法
  getMsg(){
    //获取属性值
    alert(this.msg);

  }

  setName(){
    this.username='李四';
  }

  keyupFn(e){
    console.log(e);

    if(e.keyCode==13){
      alert('按回车了');
    
    }

  }
  
  run(e){
     console.log(e);
  }

  getSearch(){
    alert(this.search);
  }
  
  addData(){
    alert(this.name);
    this.list.push(this.name);
  }


}
