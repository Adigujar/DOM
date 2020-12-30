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

function find(item){
    return document.getElementById(item)
}

let container = createElement('div')
setAttribute(container,'class','container-sm" container-md container-lg container-xl')

let container1 =createElement('row')
setAttribute(container1,'class','column')
container1.innerText = 'Form Data'
append(container1)

let name_table = createElement('div')


let names =createElement('form')

names.innerHTML = `<label for="fname">First name:</label> <input type="text" id="fname" name="fname"> 
&nbsp;&nbsp;<label for="lname">last name:</label> <input type="text" id="lname" name="lname"> `
appendChild(name_table,names)
appendChild(container1,name_table)

let gender = createElement('div')

let gen =createElement('form')
gen.innerHTML = `<label for="gen">Gender:</label><br> <input type="radio" id="male" name="gen" value="gen">Male</input> 
<input type="radio" id="female" name="gen"  value="gen">Female</input>`
appendChild(gender,gen)
appendChild(container1,gender)

let foodlist = createElement('div')
setAttribute(foodlist,'id','food')

let food =createElement('form')
food.innerHTML = `<label for="foodlist">Food List (select min 2 or max 5):</label><br> 
<input type="radio" id="food" name="food1"   >Indian</input> 
<input type="radio" id="food" name="food2" >Italiyan</input>
<input type="radio" id="food " name="food3" >Continental </input>
<input type="radio" id="food" name="food4" >chinese</input>
<input type="radio" id="food " name="food5" >Mexican </input>`
appendChild(foodlist,food)
appendChild(container1,foodlist)

let address = createElement('div')

let address1 =createElement('form')
address.innerHTML = `<label for="address1">Address:</label> <input type="text" id="address" name="address1">`
appendChild(address,address1)
appendChild(container1,address)

let pin =createElement('div')

let pincode =createElement('form')
pincode.innerHTML = '<label for="pincode">Pincode</label> <input type="text" id="pincode" name="pincode">'
appendChild(pin,pincode)
appendChild(container1,pin)

let place = createElement('div')

let state =createElement('form')
state.innerHTML = `<label for="state">State:</label> <input type="text" id="state" name="state"> <label for="country"> Country:</label> <input type="text" id="country" name="country">`
appendChild(place,state)
appendChild(container1,place)

let submit = createElement('div')
submit.innerHTML='<input type="submit" value="Submit" id="submit" onClick="insertData()">'
appendChild(container1,submit)


appendChild(container,container1)

let container2 =createElement('div')
setAttribute(container2,'class','column','id','table')
container2.innerText='Data Table'

let table =createElement('table')
setAttribute(table,'class','container','id','table')

let row = createElement('tr')

let first_name= createElement('td')
setAttribute(first_name,'id','frist_name')
first_name.innerText= 'First Name'
appendChild(row,first_name)

let last_name =createElement('td')
setAttribute(last_name,'id','last_name')
last_name.innerText= 'Last Name'
appendChild(row,last_name)

let gentype = createElement('td')
setAttribute(gentype,'id','gentype')
gentype.innerText= 'Gender'
appendChild(row,gentype)

let food_items =createElement('td')
setAttribute(food_items,'id','food_items')
food_items.innerText ="Food List"
appendChild(row,food_items)

let address_value =createElement('td')
setAttribute
address_value.innerText ='Address'
appendChild(row,address_value)

let pin_value =createElement('td')
pin_value.innerText ="Pincode"
appendChild(row,pin_value)

let state_value =createElement('td')
state_value.innerText ="State"
appendChild(row,state_value)

let country_value =createElement('td')
country_value.innerText =' Country'
appendChild(row,country_value)

appendChild(table,row)
appendChild(container2,table)
appendChild(container,container2)
append(container)



function insertData(){
    let genvalue = document.getElementsByName('gen')
    for (let i=0;i<genvalue.length;i++){
        if(genvalue[i].checked){
            return genvalue[i].checked
        }
    }

    let fooditem = document.getElementsById('food')
    foodList = ''
    foodcount =0;
    console.log(fooditem)
    fooditem.forEach(element => { if(element[j].checked){
        foodList+= (element[j].value+" ")
        foodcount++
    }
    if(foodList.length>=2){
        return alert("choose atleast two options")

    }else{
        return foodList
    }
        
    });

    var table = find('table')
        fname = find('fname').value
        lname = find('lname').value
        gen_value = genvalue
        foods = fooditem
        address_value = find('address')
        pin_ans = find('pincode').value
        state_ans =find('state').value
        country = find('country').value
        row = table.insertRow(1)
        cell1 = row.insertCell(0)
        cell2 = row.insertCell(2) 
        cell3 = row.insertCell(3)
        cell4 = row.insertCell(4)
        cell5 = row.insertCell(5)
        cell6 = row.insertCell(6)
        cell7 = row.insertCell(7)
        cell8 = row.insertCell(8)
        cell1.innerHTML = fname
        cell2.innerHTML = lname
        cell3.innerHTML = gen_value
        cell4.innerHTML = foods
        cell5.innerHTML = address_value
        cell6.innerHTML = pin_ans
        cell7.innerHTML = state_ans
        cell8.innerHTML = country
}









