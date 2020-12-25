function createElement(element) {
    return document.createElement(element);
}
  
function append(element) {
    return document.body.append(element);
}
  
function appendChild(element, child) {
    return element.appendChild(child);
}
  
function setAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
}


// resume top background

let greybg = createElement('div')
setAttribute(greybg, "class", 'resumetop');

let whitestrip = createElement('div');
setAttribute(whitestrip,'class','position')
appendChild(greybg,whitestrip)


let photo = createElement('div')
setAttribute(photo,'class','photoposit')
let my_img = createElement('img')
setAttribute(my_img,'class','img')
my_img.src='profilepic.jpg' ;
my_img.alt ='no img'
appendChild(photo,my_img)
appendChild(greybg,photo)

let myname = createElement('div');
setAttribute(myname, 'class','namebox');
myname.innerText = 'Aditya Gujar';
appendChild(greybg,myname);
append(greybg)

let address = createElement('div')
setAttribute(address,'class','center bottomwidth ')
address.innerText = 'EFG house, IJK road, STV city, XYZ country.| xyz@gmail.com |89898989898';
//appendChild(greybg,address)
append(address)



// left column main


let row = createElement("div")
setAttribute(row,'class','row  resumebottom')
let column1 = createElement('div')
setAttribute(column1,'class','column');

let protag = createElement('p')
protag.innerHTML ='<i class="fa fa-user-circle-o fa-3x" aria-hidden="true"> Profile   </i>'
appendChild(column1,protag)

let procontent = createElement('p')
procontent.innerText = ' To achieve high career growth through a continuous process in learning for achieving goals & keeping myself dynamic in the changing scenario to become a successful professional & leading to best opportunity.'
appendChild(column1,procontent)

 
let skillstag = createElement('div');
skillstag.innerHTML='<br> <i class="fa fa-diamond fa-3x" aria-hidden="true"> Skills</i> <br>'

let techskills = createElement('div')

let techhead =createElement('h4')
setAttribute(techhead,'class','center2')
techhead.innerText = 'Techincal Skills'
appendChild(techskills,techhead)

let skillslist = createElement('div')
setAttribute(skillslist,'class','row')

let list1 = createElement('div')
setAttribute(list1,'class','column2')

let item1 = createElement('p')
item1.innerText= ' JAVASCRIPT'
appendChild(list1,item1)

let item2 = createElement('p')
item2.innerText= ' CSS'
appendChild(list1,item2)

let item3 = createElement('p')
item3.innerText= 'HTML'
appendChild(list1,item3)

let item4 = createElement('p')
item4.innerText= 'JAVASCRIPT'
appendChild(list1,item4)
appendChild(skillslist,list1)

let list2 = createElement('div')
setAttribute(list2,'class','column2')

let input1 = createElement('p')
setAttribute(input1,'class','slidecontainer')
input1.innerHTML ='<input type="range" disabled="true" value="50" class="slider" >'
appendChild(list2, input1)

let input2 = createElement('p')
setAttribute(input2,'class','slidecontainer')
input2.innerHTML ='<input type="range" disabled="true" value="80" class="slider" >'
appendChild(list2, input2)

let input3 = createElement('p')
setAttribute(input3,'class','slidecontainer')
input3.innerHTML ='<input type="range" disabled="true" value="70" class="slider" >'
appendChild(list2, input3)

let input4 = createElement('p')
setAttribute(input4,'class','slidecontainer')
input4.innerHTML ='<input type="range" disabled="true" value="60" class="slider" >'
appendChild(list2, input4)


appendChild(skillslist,list2)
appendChild(techskills,skillslist)
appendChild(skillstag,techskills)
appendChild(column1,skillstag)

let addiskills = createElement('div')

let addihead =createElement('h4')
setAttribute(addihead,'class','center2')
addihead.innerText = 'Additional Skills'    
appendChild(addiskills,addihead)

let adskillslist = createElement('div')
setAttribute(adskillslist,'class','row')

let adlist1 = createElement('div')
setAttribute(adlist1,'class','column2')

let aditem1 = createElement('p')
aditem1.innerText= 'Project Management'
appendChild(adlist1,aditem1)

let aditem2 = createElement('p')
aditem2.innerText= 'business Development'
appendChild(adlist1,aditem2)
appendChild(adskillslist,adlist1)

let adlist2 = createElement('div')
setAttribute(adlist2,'class','column2')

let adinput1 = createElement('p')
setAttribute(adinput1,'class','slidecontainer')
adinput1.innerHTML ='<input type="range" disabled="true" value="50" class="slider" >'
appendChild(adlist2, adinput1)

let adinput2 = createElement('p')
setAttribute(adinput2,'class','slidecontainer')
adinput2.innerHTML ='<input type="range" disabled="true" value="80" class="slider" >'
appendChild(adlist2, adinput2)
appendChild(adskillslist,adlist2)
appendChild(addiskills,adskillslist)
appendChild(column1,addiskills)

let work = createElement('div')
work.innerHTML='<i class="fa fa-flag fa-3x" aria-hidden="true"> Work Experienec</i>'
// appendChild(column1,work)

let section = createElement('div')
setAttribute(section,'class','row')

let section1 =createElement('div')
setAttribute(section1,'class','column3')

let line1 =createElement('h4')
line1.innerText ='Comunity Manger'
appendChild(section1,line1)

let line2 =createElement('h4')
line2.innerText ='C3 HBO'
appendChild(section1,line2)
appendChild(section,section1)

let section2 = createElement('div')
setAttribute(section2,'class','column3')

let line =createElement('h4')
line.innerText ='03/12/2019-02/12/2020'
appendChild(section2,line)
appendChild(section,section2)
appendChild(work,section)
appendChild(column1,work)

let ulsection =createElement('div')

let unlist = createElement('ul')

let point1 =createElement('li')
point1.innerText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est ipsam ipsa perspiciatis a, mollitia rem? Ad, doloremque perferendis? Beatae quos neque quibusdam ipsa iusto labore commodi, eveniet dolores recusandae!'
appendChild(unlist,point1)

let point2 =createElement('li')
point2.innerText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est ipsam ipsa perspiciatis a, mollitia rem? Ad, doloremque perferendis? Beatae quos neque quibusdam ipsa iusto labore commodi, eveniet dolores recusandae!'
appendChild(unlist,point2)

let point3 =createElement('li')
point3.innerText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est ipsam ipsa perspiciatis a, mollitia rem? Ad, doloremque perferendis? Beatae quos neque quibusdam ipsa iusto labore commodi, eveniet dolores recusandae!'
appendChild(unlist,point3)
appendChild(ulsection,unlist)
appendChild(column1,ulsection)

// right column main 

let column2 = createElement('div')
setAttribute(column2,'class','column')
column2.innerText = " column2"



let work2 = createElement('div')
work2.innerHTML='<i class="fa fa-flag fa-3x" aria-hidden="true"> Work Experienec</i>'
// appendChild(column1,work)

let w2section = createElement('div')
setAttribute(w2section,'class','row')

let w2section1 =createElement('div')
setAttribute(w2section1,'class','column3')

let w2line1 =createElement('h4')
w2line1.innerText ='Event Manager'
appendChild(w2section1,w2line1)

let w2line2 =createElement('h4')
w2line2.innerText ='Housing'
appendChild(w2section1,w2line2)
appendChild(w2section,w2section1)

let w2section2 = createElement('div')
setAttribute(w2section2,'class','column3')

let w2line =createElement('h4')
w2line.innerText ='03/12/2019-02/12/2020'
appendChild(w2section2,w2line)
appendChild(w2section,w2section2)
appendChild(work2,w2section)
appendChild(column2,work2)

let w2ulsection =createElement('div')

let w2unlist = createElement('ul')

let w2point1 =createElement('li')
w2point1.innerText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est ipsam ipsa perspiciatis a, mollitia rem? Ad, doloremque perferendis? Beatae quos neque quibusdam ipsa iusto labore commodi, eveniet dolores recusandae!'
appendChild(w2unlist,w2point1)

let w2point2 =createElement('li')
w2point2.innerText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est ipsam ipsa perspiciatis a, mollitia rem? Ad, doloremque perferendis? Beatae quos neque quibusdam ipsa iusto labore commodi, eveniet dolores recusandae!'
appendChild(w2unlist,w2point2)

let w2point3 =createElement('li')
w2point3.innerText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est ipsam ipsa perspiciatis a, mollitia rem? Ad, doloremque perferendis? Beatae quos neque quibusdam ipsa iusto labore commodi, eveniet dolores recusandae!'
appendChild(w2unlist,w2point3)
appendChild(w2ulsection,w2unlist)
appendChild(column2,w2ulsection)

let education = createElement('div')
education.innerHTML ='<i class="fa fa-trophy fa-3x" aria-hidden="true">Education</i>'
appendChild(column2,education)

let degree =createElement('h4')
degree.innerText='Enggneering Mechanical program'
appendChild(column2,degree)


let eductionul =createElement('div')

let eductionlist = createElement('ul')

let edpoint1 =createElement('li')
edpoint1.innerText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est ipsam ipsa perspiciatis a, mollitia rem? Ad, doloremque perferendis? Beatae quos neque quibusdam ipsa iusto labore commodi, eveniet dolores recusandae!'
appendChild(eductionlist,edpoint1)

let edpoint2 =createElement('li')
edpoint2.innerText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est ipsam ipsa perspiciatis a, mollitia rem? Ad, doloremque perferendis? Beatae quos neque quibusdam ipsa iusto labore commodi, eveniet dolores recusandae!'
appendChild(eductionlist,edpoint2)

let edpoint3 =createElement('li')
edpoint3.innerText='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde est ipsam ipsa perspiciatis a, mollitia rem? Ad, doloremque perferendis? Beatae quos neque quibusdam ipsa iusto labore commodi, eveniet dolores recusandae!'
appendChild(eductionlist,edpoint3)
appendChild(eductionul,eductionlist)
appendChild(column2,eductionul)




appendChild(row,column1)
appendChild(row,column2)
append(row)