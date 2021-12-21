import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        title="Flutter"
        image="https://assets.alexandria.raywenderlich.com/books/be0da83c17e547776b6ff910c5109b836d4b642faedff5a9a04d18d4375714e0/images/ad5295501b90ad84026582f5d9a8996c1cb9713176e6c390088fa8e67829b5c5/w594.png"
        profileSrc="https://cdn.dribbble.com/users/17559/screenshots/6664357/figma.png?compress=1&resize=400x300"
      />
      <Story
        title="React"
        image="https://images.velog.io/images/kykim_dev/post/04ac0062-a506-427d-8370-8fe191a49a11/What-is-React-JS.jpeg"
        profileSrc="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/1010076_477783955633350_1900224762_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lJOurCSMot4AX8k8KuN&tn=W3PhfU3NUdCI-4Su&_nc_ht=scontent-ssn1-1.xx&oh=00_AT98xLdFtXzHO--vKvdYc01TfjzaMCAQmu-9vS1Y9AIevw&oe=61E53CC1"
      />
      <Story
        title="Android"
        image="https://images.kbench.com/kbench/article/2021_10/k225807p1n1-s.jpg"
        profileSrc="https://images.otwojob.com/product/t/H/1/tH1496SipRLCtEL.jpg"
      />
      <Story
        title="iOS"
        image="https://i0.wp.com/iphoneislam.com/wp-content/uploads/2021/09/ios15-welcome.jpg?fit=1280%2C720&ssl=1"
        profileSrc="https://www.cctvnews.co.kr/news/photo/202005/202710_202771_3715.png"
      />
      <Story
        title="Github"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfuaKS6AtczM6MvnSJKjVoSRkC2YIl_vzFHlA8-3q7K7pneSIeqIZQEZS55WMxdbRO7I&usqp=CAU"
        profileSrc="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
      />
    </div>
  );
}

export default StoryReel;
