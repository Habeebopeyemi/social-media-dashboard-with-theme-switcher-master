const body = document.querySelector("body");
const Switch = document.querySelector(".switch");
const label = document.querySelector("label");
const socialMediaWrapper = document.querySelectorAll(".social-media-wrapper");
const socialMediaFollowers = document.querySelectorAll(".social-media-followers");
const followersCount = document.querySelectorAll(".followers-count");
const facebookToday = document.querySelector(".social-media-todays-follower-facebook");
const overviewToday = document.querySelector(".overview-today");
const cardOverviewWrapper = document.querySelectorAll(".overview-wrapper");
const viewsCount = document.querySelectorAll(".views-count");
const Name = document.querySelector(".name");

Switch.addEventListener("click", function(){
  if(this.classList.contains("on")){
     Name.classList.remove("on");
     this.classList.remove("on");
     body.classList.remove("on");
     label.innerHTML = "Dark Mode";
     socialMediaWrapper.forEach(wrapper => wrapper.classList.remove("wrapper-background"));
     followersCount.forEach(followers => followers.classList.remove("on"));
     socialMediaFollowers.forEach(followers => followers.classList.remove("followers"));
     facebookToday.classList.remove("on");
     overviewToday.classList.remove("on");
     cardOverviewWrapper.forEach(card => card.classList.remove("on"));
     viewsCount.forEach(viewer => viewer.classList.remove("on"));
     
     }else{
      Name.classList.add("on");
       this.classList.add("on");
     body.classList.add("on");
     label.innerHTML = "Light Mode";
     label.style.color ="var(--DarkGrayishBlueText)";
     socialMediaWrapper.forEach(wrapper => wrapper.classList.add("wrapper-background"));
     followersCount.forEach(followers => followers.classList.add("on"));
     socialMediaFollowers.forEach(followers => followers.classList.add("followers"));
     facebookToday.classList.add("on");
     overviewToday.classList.add("on");
     cardOverviewWrapper.forEach(card => card.classList.add("on"));
     viewsCount.forEach(viewer => viewer.classList.add("on"));
     }
})
    