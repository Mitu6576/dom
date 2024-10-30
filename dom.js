let body = document.getElementById("structure");
body.style.backgroundColor = "pink";
body.style.width = "1000px";
body.style.margin="0 auto";
body.style.border="5px solid red";
body.style.padding="40px";







let headings = document.getElementsByClassName("heading");
headings[0].style.textAlign="center";
headings[0].style.color="white";
headings[0].style.backgroundColor="purple";
headings[0].style.padding="20px"
headings[0].style.margin="50px 0"
headings[0].style.fontSize="40px";

let contentWrapper = document.getElementById("content_wrapper");
contentWrapper.style.display = "grid";
contentWrapper.style.gridTemplateColumns="repeat(3, 1fr)";
contentWrapper.style.gap="26px";
contentWrapper.style.padding="20px";

let contents = document.getElementsByClassName("content")
for( let i= 0; i<contents.length; i++){
    contents[i].style.backgroundColor="white";
    contents[i].style.padding="10px";
    contents[i].style.border="2px solid black";
    contents[i].style.borderRadius="10%";
    

}

let heading3 = document.getElementsByTagName("h3")
heading3[0].style.color="red"
heading3[1].style.color="blue"
heading3[2].style.color="green"
heading3[3].style.color="yellow"
heading3[4].style.color="orange"

let underline = document.getElementsByTagName("a");
for(let i=0; i<underline.length;i++){
    underline[i].style.textDecoration="none"
}
underline[0].style.color="red"
underline[6].style.color="yellow"
underline[9].style.color="black"
underline[13].style.color="green"
underline[17].style.color="tomato"







