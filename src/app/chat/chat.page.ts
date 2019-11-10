import { Component, OnInit, ChangeDetectorRef, ApplicationRef } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { ChatService, Message } from '../services/chat.service';
import { Observable, interval } from 'rxjs';
import { scan, first, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  // tslint:disable-next-line: ban-types
  matches: string;
  message: string;
  sendButton : boolean;
  messages: Observable<Message[]>;
  constructor(private speechRecognition: SpeechRecognition, private cd: ChangeDetectorRef, public chat: ChatService, private appRef: ApplicationRef) { 
    let statringMsg = [
      {
        content : 'Hi I am your voice assistent. How Can i help you? Lets See the Example',
      }
    ]
    statringMsg.forEach(msg => {
      const botMessage = new Message(msg.content, 'bot');
      this.chat.update(botMessage); 
    })
    
  }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
    .pipe(
      scan((acc, val) => acc.concat(val) )
    )
        
  }

  //to get a keyup event and checking for string length 
  //if it is 0 then send button will be false
  //otherwise send button will be true
  onMessageType(event) {
    const messageLength = event.target.value.length;
    if (messageLength > 0) {
      this.sendButton = true;
    } else {
      this.sendButton = false;
    }
  }

  //on click of send button 
  //sending message to chat bot 
  sendMessage() {
    this.chat.converse(this.message);
    this.message = '';
    this.sendButton = false;
  }

  startListening() {
    this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => {
          this.appRef.isStable.pipe(
            first(stable => stable),
            switchMap(() => interval(1000))
          ).subscribe(counter => {
            if(counter == 0) {
              this.chat.converse(matches[0]);
              this.message = '';
            }
            this.cd.detectChanges();
          })
        },
        (onerror) => console.log('error:', onerror)
      )
  }

}
