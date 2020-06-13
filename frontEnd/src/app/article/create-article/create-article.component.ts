import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {ArticleService} from "../../service/article.service";
import {AuthService} from '../../service/auth.service';
import {User} from '../../models/User.model';


@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {


    articleForm : FormGroup;
    model:NgbDateStruct
    fileUploaded: boolean;
    filename ='Choisir un fichier pour l\'Article';
    selectedFile: File;
    memberIndicatif :string;

    constructor(private articleService:ArticleService , private auth : AuthService) { }

    ngOnInit(): void {
      this.articleForm = new FormGroup({
        'description': new FormControl(null),
        'title' : new FormControl(null)
      });

      if(this.auth.isAuthenticated) {
        this.auth.getMemberByIdFromServer().subscribe((user: User) => {
           //console.log(user);
           this.memberIndicatif = user.userName;
           //console.log("the user is" + this.memberIndicatif);

        });
      }
    }

    onSaveArticle() {
      if(!this.articleForm.invalid){
        const title =this.articleForm.get('title').value
        const description =this.articleForm.get('description').value
        const creator = this.auth.userId;
        this.articleService.addArticle(title,description,this.selectedFile,creator);
      }


    }

    detectFile(event: any) {
      this.selectedFile = event.target.files[0] ;
      if (event.target.files && event.target.files.length > 0) {
        this.onUploadFile(event.target.files[0]);
        this.filename = this.selectedFile.name;
      }
    }

    private onUploadFile(file: File) {
      this.fileUploaded=true;
    }

}
