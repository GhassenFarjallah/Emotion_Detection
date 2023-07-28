import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})

export class VideoComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
  myimage:string="assets/images/kid.jpg";
  myvideo:string="assets/videos/detec.mp4";
  @ViewChild('hiddenVideo', { static: false }) hiddenVideoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('hiddenVideo') videoPlayer!: ElementRef;
  @ViewChild('hiddenVideo_sad') videoPlayer_sad!: ElementRef;
  @ViewChild('hiddenVideo_angry') videoPlayer_angry!: ElementRef;
  @ViewChild('hiddenVideo_surprise') videoPlayer_surprise!: ElementRef;
  @ViewChild('button') button!: ElementRef;
  @ViewChild('button_close') buttonclose!: ElementRef;
  @ViewChild('res') result!: ElementRef;
  @ViewChild('show') sh!: ElementRef;
  @ViewChild('exit') ex!: ElementRef;
  @ViewChild('home') acc!: ElementRef;
  @ViewChild('choix') ch!: ElementRef;
  isVideoEnded: boolean = true;
  afficherchoix(){
    const but = this.button.nativeElement;
    but.style.display = "block";
    const res = this.sh.nativeElement;
    res.style.display = "none";
  }
  afficherVideo() {
    const acceuil=this.acc.nativeElement;
    acceuil.style.display="none";
    const but = this.button.nativeElement;
    but.style.display = "none";
    const b = this.buttonclose.nativeElement;
    b.style.display = "block";
    // const video_sad = this.videoPlayer_sad.nativeElement;
    // video_sad.style.display = "block"; // Change "block" to "inline" or "inline-block" based on your layout requirements.
    // const video_angry = this.videoPlayer_angry.nativeElement;
    // video_angry.style.display = "block"; // Change "block" to "inline" or "inline-block" based on your layout requirements.
    // const video_surprise = this.videoPlayer_surprise.nativeElement;
    // video_surprise.style.display = "block"; // Change "block" to "inline" or "inline-block" based on your layout requirements.
    const video = this.hiddenVideoRef.nativeElement;
    video.style.display = "block"; // Change "block" to "inline" or "inline-block" based on your layout requirements.
  }
  playVideo() {
    const video: HTMLVideoElement = this.videoPlayer.nativeElement;
    if (video.paused) {
      video.play();
    } 
    this.isVideoEnded=false;
  }
  playVideo_sad() {
    const video_sad: HTMLVideoElement = this.videoPlayer_sad.nativeElement;
    if (video_sad.paused) {
      video_sad.play();
    } 
    this.isVideoEnded=false;
  }
  playVideo_angry() {
    const video_angry: HTMLVideoElement = this.videoPlayer_sad.nativeElement;
    if (video_angry.paused) {
      video_angry.play();
    } 
    this.isVideoEnded=false;
  }
  playVideo_surprise() {
    const video_surprise: HTMLVideoElement = this.videoPlayer_sad.nativeElement;
    if (video_surprise.paused) {
      video_surprise.play();
    } 
    this.isVideoEnded=false;
  }

  stopVideo(){
    const acceuil=this.acc.nativeElement;
    acceuil.style.display="block";
    const but = this.button.nativeElement;
    but.style.display = "none";
    const b = this.buttonclose.nativeElement;
    b.style.display = "none";
    const video = this.hiddenVideoRef.nativeElement;
    video.style.display = "none"; // Change "block" to "inline" or "inline-block" based on your layout requirements.
    video.currentTime = 0;
    const video_sad = this.videoPlayer_sad.nativeElement;
    video_sad.style.display = "none"; // Change "block" to "inline" or "inline-block" based on your layout requirements.
    video_sad.currentTime = 0;
    const video_angry = this.videoPlayer_angry.nativeElement;
    video_angry.style.display = "none"; // Change "block" to "inline" or "inline-block" based on your layout requirements.
    video_angry.currentTime = 0;
    const video_surprise = this.videoPlayer_surprise.nativeElement;
    video_surprise.style.display = "none"; // Change "block" to "inline" or "inline-block" based on your layout requirements.
    video_surprise.currentTime = 0;
    video.pause();
     video_sad.pause();
    video_angry.pause();
    video_surprise.pause();
    const res = this.sh.nativeElement;
    res.style.display = "block";
    const choix = this.ch.nativeElement;
    choix.style.display = "block";
    this.isVideoEnded=true;

  }
  end() {
    this.isVideoEnded = true;
    this.stopVideo(); // You can stop and hide the video when it finishes playing
    console.log("Video has ended!");
    const res = this.sh.nativeElement;
    res.style.display = "block";
    const acceuil=this.acc.nativeElement;
    acceuil.style.display="block";

  }
  resultat(){
    const res = this.sh.nativeElement;
    res.style.display = "none";
    const bilan = this.result.nativeElement;
    bilan.style.display = "block";
    const quit = this.ex.nativeElement;
    quit.style.display = "block";

  }
  quitter(){
    const quit = this.ex.nativeElement;
    quit.style.display = "none";
    const res = this.result.nativeElement;
    res.style.display = "none";
    const but = this.button.nativeElement;
    but.style.display = "block";
  }
 

  
  
  }
  //   playVideo() {
  //      // Récupérez l'élément vidéo par son identifiant
       
  //      var video = document.getElementById("myVideo");

  //      // Vérifiez si la vidéo est déjà en cours de lecture
  //      if (video.paused) {
  //          // Si la vidéo est en pause, lancez-la
  //          video.play();
  //      } else {
  //          // Sinon, mettez la vidéo en pause
  //          video.pause();
  //      }
  //  }


