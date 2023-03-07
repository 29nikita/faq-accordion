import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'faq-accordion';
  selectedQues: any;
  displayAns: boolean = false;
  isSelectedColor: boolean = false;

  quesObj = [
    {
      "ques": "How many team members can I invite?",
      "ans": "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    },
    {
      "ques": "What is the maximum file upload size?",
      "ans": " No more than 2GB. All files in your account must fit your allotted storage space."
    },
    {
      "ques": "How do I reset my password?",
      "ans": "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
    },
    {
      "ques": "Can I cancel my subscription?",
      "ans": "Yes! Send us a message and we’ll process your request no questions asked."
    },
    {
      "ques": "Do you provide additional support?",
      "ans": "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    }
  ];

  constructor() { }
  ngOnInit() {

    console.log(this.quesObj);
   
  }

  onClickQues(selectedObj: any){
    this.selectedQues = selectedObj.ques;
    if(this.selectedQues == selectedObj.ques){
      this.displayAns= true;
      this.isSelectedColor = true;
    }
  }


 
}
