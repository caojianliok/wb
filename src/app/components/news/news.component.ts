import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  title='你好！angular4.X';/*属性*/

  msg:any;/*另一种定义属性的方法*/

  msg1:string='String类型的msg1';

  //定义属性，加修饰符
  public username='张三';//单双引号都行

  public student:string="是个学生";

  /*声明属性的几种方式*/
  /*
  public 公有 *（默认） 可以在类里类外使用
  protected  保护类    当前类以及其子类
  private  私有   当前类
  */

  //属性
  public id='123';

  public h='';

  //数据循环
  public list=[];

  public list2:any[];

  public list3:any[];

  public list4:any[];

  //对象
  public obj={
    name:'张三'
  }


  constructor() {
    this.msg='这是另一种定义属性方法';
    
    //去服务器请求数据  新闻
    this.h="<h2>h2的值，新闻数据</h2>";
    
    this.list=['111','222','333'];

    this.list2=['数学','语文','英语'];

    this.list3=[
      {"title":"111111111"},
      {"title":"222222222"},
      {"title":"333333333"}
    ];

    this.list4=[
      {'catename':'宝马',
       'list':[
        {'title':'宝马x1'},
        {'title':'宝马x2'},
        {'title':'宝马3'}
        ]
      },
      {'catename':'奥迪',
       'list':[
        {'title':'奥迪xA'},
        {'title':'奥迪xB'},
        {'title':'奥迪C'}
        ]
      }
    ];



   }

  ngOnInit() {
  }

}
